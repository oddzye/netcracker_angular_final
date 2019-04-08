import { Injectable } from '@angular/core';
import {User} from '../interfaces'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _token = null;
  private _currentUser: User  =  {
    email: "some@mail.ru",
    password: "123"
  };

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/register', user)
  }

  setToken(token:string) {
    this._token = token;
  }

  getToken():string {
    return this._token;
  }

  setCurrentUser(user: User) {
    this._currentUser = user;
  }

  getCurrentUser() {
    return this._currentUser.email;
  }

  isAuth():boolean {
    return !!this.getToken();
  }

  logOut() {
    this.setToken(null);
    localStorage.clear();
  }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('authToken', token);
            this.setToken(token);
            this.setCurrentUser(user);
          }
        )
      )
  }
}
