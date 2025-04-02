import {Component, input} from '@angular/core';
import {Blog} from '../../../../models/blog.type';
import {RouterLink} from '@angular/router';
import {BrowserPlatformLocation, DatePipe} from '@angular/common';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';

@Component({
  selector: 'app-blog-item',
  imports: [RouterLink, DatePipe, TruncatePipe],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  blog = input.required<Blog>()

  protected readonly BrowserPlatformLocation = BrowserPlatformLocation;
}
