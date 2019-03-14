import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  private _userRegister;
  signUpForm: FormGroup;
  constructor() { 
  }
  
  

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  signInOnSubmit():void {
    this._userRegister = {
      email: this.signUpForm.value.email,
      name: this.signUpForm.value.name,
      surname: this.signUpForm.value.surname,
      password: this.signUpForm.value.password,
      confirmPassword: this.signUpForm.value.confirmPassword
    };
    
    
  }
  
}
