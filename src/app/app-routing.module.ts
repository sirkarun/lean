import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { HomeComponent } from './page/home/home.component';
import { PostListComponent } from './page/post-list/post-list.component';
import { FormComponent } from './page/form/form.component';
import { FormGroupComponent } from './page/form-group/form-group.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'post-list',
        component: PostListComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'form-group',
        component: FormGroupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'admin',
    component: PrivateZoneComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: './module/user/user.module#UserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
