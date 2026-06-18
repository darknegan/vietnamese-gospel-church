import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Vietnamese Gospel Church · Hội Thánh Phúc Âm',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    title: 'About · Vietnamese Gospel Church',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'events',
    title: 'Events · Vietnamese Gospel Church',
    loadComponent: () => import('./pages/events/events.component').then((m) => m.EventsComponent),
  },
  {
    path: 'ministries',
    title: 'Ministries · Vietnamese Gospel Church',
    loadComponent: () =>
      import('./pages/ministries/ministries.component').then((m) => m.MinistriesComponent),
  },
  {
    path: 'sermons',
    title: 'Sermons · Vietnamese Gospel Church',
    loadComponent: () => import('./pages/sermons/sermons.component').then((m) => m.SermonsComponent),
  },
  {
    path: 'visit',
    title: 'Plan a Visit · Vietnamese Gospel Church',
    loadComponent: () => import('./pages/visit/visit.component').then((m) => m.VisitComponent),
  },
  {
    path: 'gallery',
    title: 'Gallery · Vietnamese Gospel Church',
    loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
  },
  {
    path: 'give',
    title: 'Give · Vietnamese Gospel Church',
    loadComponent: () => import('./pages/give/give.component').then((m) => m.GiveComponent),
  },
  { path: '**', redirectTo: '' },
];
