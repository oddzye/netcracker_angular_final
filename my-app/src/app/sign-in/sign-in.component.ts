import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {

    const user = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    };
    this.auth.login(user).subscribe({
      next: () => console.log('Login success'),
      error: (err) => console.warn(err) 
    })
    
    console.log("signINFORM!");
  }

}
