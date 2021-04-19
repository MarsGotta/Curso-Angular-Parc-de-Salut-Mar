import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef) {}
  countries: Array<string> = [
    'España',
    'Italia',
    'Francia',
    'Alemania',
    'Mexico',
  ];

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
      country: ['', [Validators.required]],
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

  get addDynamicElement() {
    return this.registrationForm.get('addDynamicElement') as FormArray;
  }

  changeCountry(e: any): void {
    // Opción para setear valores en el formulario desde el controlador.
    //this.registrationForm.get('address.country')?.setValue(e.target.value);
  }

  addSkill(): void {
    this.addDynamicElement.push(this.fb.control(''));
    console.log(this.addDynamicElement);
  }

  @ViewChild('fileInput') el: ElementRef = new ElementRef('');
  editFile: boolean = true;
  removeUpdload: boolean = false;
  imageUrl: any = '';

  updloadFile(e: any): void {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = e.target.files[0];
    if (e.target?.files && e.target?.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result,
        });
        this.editFile = false;
        this.removeUpdload = true;
      };
      this.cd.markForCheck();
    }
  }

  removeUpdloadFile(): void {
    let newFileList = Array.from(this.el.nativeElement.files);
    if (newFileList && newFileList[0]) {
      this.imageUrl = '';
      this.removeUpdload = false;
      this.editFile = true;
      this.registrationForm.patchValue({
        file: [null],
      });
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {}
}
