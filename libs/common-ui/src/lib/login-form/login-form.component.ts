import {Location} from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '@consider/shared-services';

@Component({
  selector: 'consider-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm: FormGroup
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private location: Location
  ){
    this.loginForm = this.fb.group({
      email: this.fb.control('', Validators.email),
      password: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    const { email, password } = this.loginForm.value
    this.userService.signIn({email, password})
    .subscribe(res => {
        const cookies = 
        this.location.go("/questionnaires")
      })
  }
}
