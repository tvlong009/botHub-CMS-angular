import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private alert: AlertService) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    this.alert.success('Log out successfully');
  }
}

