import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  regis(user: any): Observable<any> {
    // return this.http.post(environment.ApiURL + '/user', user);
    return this.http.post(`${environment.ApiURL}/user`, user);
  }
}
