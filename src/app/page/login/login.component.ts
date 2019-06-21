import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private login: LoginService
  ) {}

  LoginForm = this.fb.group({
    userId: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  ngOnInit() {}

  regis() {
    this.router.navigate(['register']);
  }

  onFormSubmit() {
    if (this.LoginForm.valid) {
      this.login.login(this.LoginForm.value).subscribe(data => {
        if (data.success) {
          sessionStorage.setItem('APPTOKEN', data.token);
          this.router.navigate(['admin']);
        }
        console.log(data);
      });
    } else {
      alert('invalid');
    }
  }
}
