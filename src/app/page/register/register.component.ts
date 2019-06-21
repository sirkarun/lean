import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private registerservice: RegisterService,
    private router: Router
  ) {}
  registerForm = this.fb.group({
    userId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  ngOnInit() {}
  onFormSubmit() {
    if (this.registerForm.valid) {
      this.registerservice.regis(this.registerForm.value).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['login']);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      alert('Invalid Register Form');
    }
  }
}
