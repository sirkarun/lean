import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private userservice: UserService, private router: Router) {
    // this.userservice.findAll().subscribe(data => {
    //   this.users = data;
    // });
    this.users = this.userservice.findAll();
  }

  ngOnInit() {}

  onDelClick(id: number) {
    this.userservice.Delete(id).subscribe(data => {
      console.log(data);
      this.users = this.userservice.findAll();
    });
  }
  onEditClick(id: number) {
    this.router.navigate(['admin', 'user', 'form', id]);
  }

  onAddClick() {
    this.router.navigate(['admin', 'user', 'form']);
  }
}
