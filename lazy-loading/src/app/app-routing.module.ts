import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts-routing.module').then(m => m.PostsRoutingModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about-routing.module').then(m => m.AboutRoutingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact-routing.module').then(m => m.ContactRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
