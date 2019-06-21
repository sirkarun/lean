import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id: number;
  mode = false;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private router: Router,
    private activerouter: ActivatedRoute,
    private registerservice: RegisterService
  ) {
    this.activerouter.params.subscribe(param => {
      if (param.id) {
        this.id = param.id;
        this.mode = true;
        this.userservice.getById(param.id).subscribe(data => {
          //this.userForm.setValue(data);
          console.log(data);
          this.userForm.patchValue(data);
        });
      }
    });
  }
  userForm = this.fb.group({
    userId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  ngOnInit() {}

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.mode) {
        this.userservice.updateuser(this.id, this.userForm.value).subscribe(
          data => {
            this.router.navigate(['admin', 'user', 'list']);
          },
          err => {
            alert(err);
          }
        );
      } else {
        this.registerservice.regis(this.userForm.value).subscribe(data => {
          this.router.navigate(['admin', 'user', 'list']);
        });
      }
    }
  }
}
