import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(simpleFrom: NgForm) {
    if (simpleFrom.valid) {
      console.log('Post data to server');
    } else {
      console.log('Error');
    }
  }
}
