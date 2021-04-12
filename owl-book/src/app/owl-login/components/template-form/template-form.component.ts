import { Component, OnInit } from '@angular/core';

interface LoginForm {
  email: string;
  password: string;
  newPassword: string;
  repeatPass: string;
  securityQuestion: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  login: LoginForm = {
    email: '',
    password: '',
    newPassword: '',
    repeatPass: '',
    securityQuestion: '',
  };

  showForgotPass: boolean = false;
  equalPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  validateEqualPass(): void {
    if (
      this.login.newPassword !== this.login.repeatPass &&
      this.showForgotPass
    ) {
      console.log(this.equalPassword);
      this.equalPassword = false;
    } else if (
      this.login.newPassword == this.login.repeatPass &&
      this.showForgotPass
    ) {
      this.equalPassword = true;
    }
  }

  submit({
    email,
    password,
    newPassword,
    repeatPass,
    securityQuestion,
  }: LoginForm): void {
    console.log('Email :', email);
    console.log('Contraseña :', password);
    console.log('newPassword :', newPassword);
    console.log('repeatPass :', repeatPass);
    console.log('securityQuestion :', securityQuestion);
  }
}
