import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import {LoginService} from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AlertService} from '../services/alert.service';
declare var AdminLTE: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  returnUrl: string;
  constructor(
    private _loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private _alert: AlertService
  ) {
    let fb = new FormBuilder();
    this.loginForm = fb.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  Login(event) {
    if (this.loginForm.valid){
      const loginForm = this.loginForm.value;
      localStorage.setItem('currentUser',JSON.stringify(loginForm));
      this.router.navigate([this.returnUrl]);

      // this._loginService.login(loginForm).subscribe(data => {
      //   console.log(data);
      // });
    } else {
      this._alert.error("PLEASE FILL IN ALL FIELD");
    }
  }
  ngOnInit() {
    AdminLTE.init();
  }

}
