import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/services/services.module').then(mod => mod.ServicesModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(mod => mod.BlogModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(mod => mod.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
