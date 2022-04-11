import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { DatePipe } from '@angular/common';

import { AgeValidator } from '.././custom-validators/age.validator';
import { Occupation } from "./premium-calculator.model";
import { PremiumCalculatorService } from "../services/premium-calculator/premium-calculator.service";

@Component({
  selector: 'premium-calculator-component',
  templateUrl: './premium-calculator.component.html'
})
export class PremiumCalculatorComponent implements OnInit {
  private premiumCalculatorForm: FormGroup;
  private monthlyPremium;

  private beginDate;
  private endDate;
  public occupations: Occupation[];

  constructor(private formBuilder: FormBuilder, private premiumCalService: PremiumCalculatorService, private datePipe: DatePipe ) {
    this.premiumCalService.getOccupations()
      .subscribe(result => this.occupations = result, error => console.error(error));
  }

  ngOnInit(): void {
    this.monthlyPremium = 0;
    this.setMinMaxDate();
    this.premiumCalculatorForm = this.formBuilder.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      occupation: ['0', Validators.required],
      sumInsured: ['', Validators.required]
    });
  }

  private setMinMaxDate() {

    this.beginDate = new Date();
    this.beginDate.setFullYear(this.beginDate.getFullYear() - 70);
    this.beginDate = ((this.datePipe.transform(this.beginDate, 'yyyy-MM-dd')));

    this.endDate = new Date();
    this.endDate.setFullYear(this.endDate.getFullYear() - 16);
    this.endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');

  }

  public calculatePremium() {
    this.premiumCalService.calculatePremium(this.premiumCalculatorForm.value)
      .subscribe(result => this.monthlyPremium = result, error => console.error(error));

  }
}

