import { Injectable } from '@angular/core';
import {Blog} from '../models/blog.type';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [
    {
      id: 1,
      title: 'Blog 1',
      content: 'This is the content of Blog 1',
      createdAt: new Date('2023-01-01')
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'This is the content of Blog 2',
      createdAt: new Date('2023-02-01')
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'This is the content of Blog 3',
      createdAt: new Date('2023-03-01')
    }
  ];

  constructor() { }

  getBlogs() {
    return this.blogs;
  }

  getBlog(id: number) {
    return this.blogs.find(blog => blog.id === id);
  }
}
