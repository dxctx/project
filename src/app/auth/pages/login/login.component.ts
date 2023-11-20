import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  redirect() {
    if (this.formLogin.valid) {
      localStorage.setItem('blossom_user', JSON.stringify(this.formLogin.value));
      this.router.navigateByUrl('/pages/dashboard');
    }
    this.formLogin.reset();
  }
}
