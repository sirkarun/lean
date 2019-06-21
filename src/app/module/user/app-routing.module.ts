import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './page/user-form/user-form.component';
import { UserListComponent } from './page/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'form/:id',
    component: UserFormComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRouting {}
