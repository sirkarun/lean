import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.ApiURL + '/user');
  }

  Delete(id: number): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      Authorization: 'jwt ' + sessionStorage.getItem('APPTOKEN')
    });

    return this.http.delete(environment.ApiURL + '/user/' + id, {
      headers: header
    });
  }

  updateuser(id: number, user: any): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      Authorization: 'jwt ' + sessionStorage.getItem('APPTOKEN')
    });
    return this.http.put(environment.ApiURL + '/user/' + id, user, {
      headers: header
    });
  }

  getById(id: number) {
    return this.http.get(environment.ApiURL + '/user/' + id);
  }
}
