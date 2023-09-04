import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'app/service/common.service';
import { NotificationService } from 'app/service/notification.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showDiv = false;
  registerForm: FormGroup;
  months: number[];
  years: number[]
  selectedCounty: any;
  selectedState: any;
  selectedCity: any;
  currentYear: any;
  countryData: any;
  stateData: any;
  cityData: any;
  getCountryId: any;
  selectedCountryName: any;
  selectedStateName: any;
  selectedCityName: any

  tipsterUser = "Tipster User"
  public statesForSelectedCountry: { [key: string]: Object }[];
  public citiesForSelectedState: { [key: string]: Object }[];
  constructor(private formBuilder: FormBuilder, private registerService: CommonService,
    private userService: UserService, private router: Router, private notifyService: NotificationService) {
    this.registerForm = this.formBuilder.group({
      isTipster: [false],
      currentDate: [],
      expirationMonth: [],
      expirationYear: [this.currentYear],
      country: [''],
      state: [''],
      city: [''],
      postcode: [''],
      userEmail: [''],
      userName: [''],
      cardNumber: [''],
      cvvNumber: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator,
    });
  }

  ngOnInit(): void {
    this.months = Array.from({ length: 12 }, (_, i) => i + 1);
    this.currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 10 }, (_, i) => this.currentYear + i);
    this.getCountrys();
  }

  onCountryChange(selectedCountry: any) {
    this.selectedCountryName = selectedCountry?.name;
    const selectedCountryIso2 = selectedCountry?.iso2;
    this.getCountryId = selectedCountryIso2
    this.registerService.getStatesByCountry(this.getCountryId).subscribe((state: any) => {
      this.stateData = state;
    })
  }

  onStateChange(selectState: any) {
    this.selectedStateName = selectState?.name;
    const selectedStateIso2 = selectState?.iso2;

    this.registerService.getCitiesByState(this.getCountryId, selectedStateIso2).subscribe((city: any) => {
      this.cityData = city;
    })
  }

  onCityChange(selectCity: any) {
    this.selectedCityName = selectCity?.name;
  }

  toggleDiv(): void {
    if (this.showDiv === false) {
      this.registerForm.controls['isTipster'].setValue(true);
      this.registerForm.get('country')?.setValidators([Validators.required]);
      this.registerForm.get('state')?.setValidators([Validators.required]);
      this.registerForm.get('city')?.setValidators([Validators.required]);
      this.registerForm.get('userEmail')?.setValidators([Validators.required]);
      this.registerForm.get('userName')?.setValidators([Validators.required]);
      this.registerForm.get('cardNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{16}$/)]);
      this.registerForm.get('cvvNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{3}$/)]);
      this.registerForm.get('expirationMonth')?.setValidators([Validators.required]);
      this.registerForm.get('expirationYear')?.setValidators([
        Validators.required,
        this.expirationDateValidator
      ]);
    } else {
      this.registerForm.controls['isTipster'].setValue(false);
      this.registerForm.get('country')?.setValidators([]);
      this.registerForm.get('state')?.setValidators([]);
      this.registerForm.get('city')?.setValidators([]);
      this.registerForm.get('userEmail')?.setValidators([]);
      this.registerForm.get('userName')?.setValidators([]);
      this.registerForm.get('cardNumber')?.setValidators([]);
      this.registerForm.get('cvvNumber')?.setValidators([]);
      this.registerForm.get('expirationMonth')?.setValidators([]);
      this.registerForm.get('expirationYear')?.setValidators([]);
    }
    this.registerForm.get('country')?.updateValueAndValidity();
    this.registerForm.get('state')?.updateValueAndValidity();
    this.registerForm.get('city')?.updateValueAndValidity();
    this.registerForm.get('userEmail')?.updateValueAndValidity();
    this.registerForm.get('userName')?.updateValueAndValidity();
    this.registerForm.get('cardNumber')?.updateValueAndValidity();
    this.registerForm.get('cvvNumber')?.updateValueAndValidity();
    this.registerForm.get('expirationMonth')?.updateValueAndValidity();
    this.registerForm.get('expirationYear')?.updateValueAndValidity();
    this.showDiv = !this.showDiv;
  }

  expirationDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedYear = control.get('expirationYear')?.value;
    const selectedMonth = control.get('expirationMonth')?.value;
    if (selectedYear && selectedMonth) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; // Adding 1 to adjust for 0-based months

      if (selectedYear < currentYear || (selectedYear === currentYear && selectedMonth < currentMonth)) {
        return { invalidExpirationDate: true };
      }

      const validRange = currentYear + 10; // 10 years ahead
      if (selectedYear > validRange) {
        return { invalidExpirationDate: true };
      }
    }
    return null;
  }

  onCardNumberInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/[^0-9]/g, '').slice(0, 16);
  }

  onCvvNumberInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/[^0-9]/g, '').slice(0, 3);
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl?.value === confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors(null);
    } else {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    }
  }

  getCountrys() {
    this.registerService.getCountries().subscribe((country: any) => {
      this.countryData = country;
    })
  }

  renderNumber(value: number, length: number) {
    let result: string = value.toString();
    for (; length > result.length; length -= 1) result = '0' + result;
    return result;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerForm.controls['country'].setValue(this.selectedCountryName);
      this.registerForm.controls['state'].setValue(this.selectedStateName);
      this.registerForm.controls['city'].setValue(this.selectedCityName);
      this.registerForm.controls['expirationMonth'].setValue(parseInt(this.registerForm.controls['expirationMonth'].value, 10));
      this.registerForm.controls['expirationYear'].setValue(parseInt(this.registerForm.controls['expirationYear'].value, 10));
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      this.registerForm.controls['currentDate'].setValue(formattedDate);
      this.userService.registerUser(this.registerForm.value).subscribe((resp: any) => {
        if (resp) {
          this.notifyService.showSuccess("User registration is done", "sucess");
          this.router.navigate(['login']);
        }
      });
    }
  }
}