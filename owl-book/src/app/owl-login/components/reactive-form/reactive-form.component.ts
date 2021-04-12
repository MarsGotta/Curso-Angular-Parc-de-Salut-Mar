import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  registrationForm = this.fb.group({
    file: [null],
    fullName: this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
        ],
      ],
      lastName: ['', Validators.required],
    }),
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cityName: ['', [Validators.required]],
    }),
    gender: ['', [Validators.required]],
    passwordValidation: this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }),
    addDynamicElement: this.fb.array([]),
  });

  get myForm() {
    return this.registrationForm.controls;
  }

  ngOnInit(): void {}

  onSubmit(): void {}
}
