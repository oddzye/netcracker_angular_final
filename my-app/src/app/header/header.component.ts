import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  
  

  constructor(private _auth: AuthService) { }

  getSignButtonText() {
    return this._auth.isAuth() ? 'Выйти' : 'Войти'
  }

  getRegisterBtnStyle() {
    return this._auth.isAuth() ? {display: 'none'} : {display: 'inline-block'}
  }
  ngOnInit() {
  }

}
