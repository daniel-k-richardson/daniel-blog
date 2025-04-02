import {Component, inject, OnInit, signal} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../models/blog.type';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {FormsModule} from '@angular/forms';
import {FilterBlogsPipe} from './pipes/filter-blogs.pipe';

@Component({
  selector: 'app-blogs',
  imports: [
    BlogItemComponent,
    FormsModule,
    FilterBlogsPipe
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {
  blogService = inject(BlogService);
  blogs = signal<Blog[]>([])
  searchTerm = signal<string>('');

  ngOnInit() {
      this.blogs.set(this.blogService.getBlogs());
  }
}
