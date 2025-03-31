import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'blogs',
    loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent)
  },
];
