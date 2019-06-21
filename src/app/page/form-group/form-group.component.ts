import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  simpleForm = this.fb.group({
    first: ['xx', [Validators.required, Validators.minLength(5)]],
    last: ['chadee', [Validators.required]]
  });
  ngOnInit() {}

  onSubmit() {
    if (this.simpleForm.valid) {
      alert('yes');
    } else {
      alert('no');
    }
  }
}
