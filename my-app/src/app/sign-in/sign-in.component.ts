import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  private _userLogin;
  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this._userLogin = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    };
    let users = JSON.parse(localStorage.getItem('users'));
    console.log("all users", users);
    let userAccepted = users
      .filter(item => item.email === this._userLogin.email)
      .filter(item => item.password === this._userLogin.password);
    console.log("accepted users", userAccepted);
    if (userAccepted && userAccepted.length === 1) {
      localStorage.setItem('currentUser', JSON.stringify(userAccepted[0]));
    }

    console.log("signINFORM!");
  }

}
