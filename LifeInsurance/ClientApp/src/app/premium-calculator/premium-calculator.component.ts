import { Component, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

import { AgeValidator } from '.././custom-validators/age.validator';

@Component({
  selector: 'premium-calculator-component',
  templateUrl: './premium-calculator.component.html'
})
export class PremiumCalculatorComponent {
  private premiumCalculatorForm: FormGroup;
  private monthlyPremium: number;

  public occupations: Occupation[];

  constructor(private formBuilder: FormBuilder, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get<Occupation[]>(baseUrl + 'api/LifeInsurance').subscribe(result => {
      this.occupations = result;
      console.log(this.occupations);
    }, error => console.error(error));

    this.premiumCalculatorForm = formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, AgeValidator]],
      dob: ['', Validators.required],
      sumInsured: ['', Validators.required]
    });
    this.monthlyPremium = 0;
  }

  public calculatePremium() {
    this.monthlyPremium++;
  }
}

interface PremiumCalculator {
  name: string;
  age: string;
  bod: string;
  occupation: string;
  sumInsured: number;
}

interface Occupation {
  name: string;
  rating: string;
}
