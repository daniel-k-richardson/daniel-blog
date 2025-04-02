import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'blogs',
    loadComponent: () => import('./pages/blogs/blogs.component').then(m => m.BlogsComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./pages/blogs/blog/blog.component').then(m => m.BlogComponent)
  },
];
