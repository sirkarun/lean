import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home Title';
  url = 'http://www.google.co.th';
  @Input() name;
  @Output() te: EventEmitter<string> = new EventEmitter<string>();
  show = true;
  items = ['One', 'Two', 'Three', 'Four'];
  case = 5;
  exp1 = 1;
  exp2 = 2;
  constructor() {}

  ngOnInit() {}
  onbtnclick() {
    alert(this.url);
    this.te.emit(this.url);
  }
  onToggle() {
    this.show = !this.show;
  }
}
