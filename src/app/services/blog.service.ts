import {inject, Injectable} from '@angular/core';
import {Blog} from '../models/blog.type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  http = inject(HttpClient);

  constructor() { }

 getBlogs() {
    return this.http.get<Blog[]>('http://localhost:5115/api/blogs')
  }

  getBlog(id: string) {
    return this.http.get<Blog>(`http://localhost:5115/api/blogs/${id}`)
  }
}
