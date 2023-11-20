import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  currenUser = JSON.parse(localStorage.getItem('blossom_user')!);

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
