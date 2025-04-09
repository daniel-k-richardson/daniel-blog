import {Pipe, PipeTransform} from '@angular/core';
import {Blog} from '../../../models/blog.type';

@Pipe({
  name: 'filterBlogs'
})
export class FilterBlogsPipe implements PipeTransform {

  transform(blogs: Blog[], search: string): Blog[] {
    if (!search) {
      return blogs;
    }

    return blogs.filter(blog => blog.content.toLowerCase().includes(search.toLowerCase()));
  }
}
