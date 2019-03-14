import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit, OnDestroy {
  
  signUpForm: FormGroup;
  aSub: Subscription
  constructor(private _auth: AuthService, private _router: Router, private _route: ActivatedRoute ) { }
  
  

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      // name: new FormControl('', Validators.required),
      // surname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      // confirmPassword: new FormControl('', Validators.required)
    });

   
  }

  signUpOnSubmit():void {
    const userRegister = {
      email: this.signUpForm.value.email,
      // name: this.signUpForm.value.name,
      // surname: this.signUpForm.value.surname,
      password: this.signUpForm.value.password,
      // confirmPassword: this.signUpForm.value.confirmPassword
    };

    this.aSub = this._auth.register(userRegister).subscribe({
      next: () => {
        this._router.navigate(['/api/auth/login'], 
        {
          queryParams: {
            registered: true
          }
        })
      },
      error: (err) => {
        console.warn(err);
        this.signUpForm.enable();
      }
    })
    
  }

  ngOnDestroy() {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }
  
}
