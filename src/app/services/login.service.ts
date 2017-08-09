import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class LoginService {

  constructor(private _http: Http) { }
  login(loginForm) {
    return this._http.get('https://');
  }
}
