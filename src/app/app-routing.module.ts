import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,
    children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'posts',
      component: PostsComponent
    }
  ]
  }
];
// one main route and two child routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
