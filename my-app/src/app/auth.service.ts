import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private _users = [];

  public getUsers() {
    return this._users;
  }

  public pushToUsers(user):void {
      this._users.push(user);
  }

}
