import {Component, effect, inject, OnInit, signal} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../models/blog.type';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {FormsModule} from '@angular/forms';
import {FilterBlogsPipe} from './pipes/filter-blogs.pipe';
import {catchError} from 'rxjs';
import {PortalModule} from '@angular/cdk/portal';
import {PortalService} from '../../services/portal.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-blogs',
  imports: [
    BlogItemComponent,
    FormsModule,
    FilterBlogsPipe,
    PortalModule
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {
  blogService = inject(BlogService);
  blogs = signal<Blog[]>([])
  searchTerm = signal<string>('');

  portalService = inject(PortalService);
  authService: AuthService = inject(AuthService);

  isLoggedIn = signal(false);

  constructor() {
    // Use effect to track changes in AuthService's isLoggedIn signal
    effect(() => {
      this.isLoggedIn.set(this.authService.isLoggedIn());
    });
  }

  openModal() {
    this.portalService.openModal();
  }

  closeModal() {
    this.portalService.closeModal();
  }

  ngOnInit() {
    this.blogService.getBlogs()
      .pipe(
        catchError((error) => {
            console.error('Error fetching blogs:', error);
            throw error;
          }
        ))
      .subscribe((blogs: Blog[]) => {
        this.blogs.set(blogs);
      })
  }
}
