import {Component, inject, OnInit, signal} from '@angular/core';
import {BlogService} from '../../../services/blog.service';
import {Blog} from '../../../models/blog.type';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [
    DatePipe
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService: BlogService = inject(BlogService);
  blog = signal<Blog | undefined>(undefined);
  blogId: number = -1;

  ngOnInit() {
    this.blogId = Number(this.route.snapshot.params['id']);
    this.blog.set(this.blogService.getBlog(this.blogId));
  }
}
