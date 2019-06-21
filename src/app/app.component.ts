import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  lang = 'EN';
  constructor(private translateservice: TranslateService) {
    this.translateservice.setDefaultLang('en');
    this.translateservice.use('en');
  }
  onbtnclick(te: string) {
    alert('error' + te);
  }
  switchLang() {
    if (this.lang == 'EN') {
      this.translateservice.use('en');
      this.lang = 'th';
    } else {
      this.translateservice.use('th');
      this.lang = 'EN';
    }
  }
}
