import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from '../services/auth-guard.service';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
