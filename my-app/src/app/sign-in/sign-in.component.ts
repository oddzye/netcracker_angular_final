import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  aSub: Subscription
  constructor(private _auth: AuthService, private _router: Router, private _route: ActivatedRoute ) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this._route.queryParams.subscribe({next: (params: Params) => {
      if(params["registered"]) {
        //Теперь можете зайти в систему, используя введенные данные
      }else if (params["accessDenied"]) {
        //Для начала авторизуйтесь в системе
      }
    }})
  }

  login() {
    this.signInForm.disable();

    const user = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    };
   this.aSub =  this._auth.login(user).subscribe({
      next: () => this._router.navigate(['/blog']),
      error: (err) => {
        console.warn(err) 
        this.signInForm.enable()
      } 
    })
    
    console.log("signINFORM!");
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}
