import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private registerURL = 'http://localhost:3000/api-user/registro';
  private baseURL = 'http://localhost:3000/api-user/';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post(this.registerURL, user);
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(this.baseURL + user.id);
  }

  getUser(user: User): Observable<any> {
    return this.http.get(this.baseURL + user.id);
  }
}
