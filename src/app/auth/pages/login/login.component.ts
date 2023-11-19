import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private fb: FormBuilder) {}

  formLogin!: FormGroup;

  ngOnInit() {
    this.formLogin = this.fb.group({});
  }

  redirect() {
    this.router.navigateByUrl('/pages/dashboard');
  }
}
