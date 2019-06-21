import { NgModule } from '@angular/core';
import { UserModuleRouting } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './page/user-list/user-list.component';
import { UserFormComponent } from './page/user-form/user-form.component';
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [CommonModule, UserModuleRouting, FormsModule, ReactiveFormsModule],
  providers: [UserService]
})
export class UserModule {}
