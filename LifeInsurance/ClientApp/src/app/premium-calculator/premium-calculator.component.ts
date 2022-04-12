import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Occupation, PremiumCalculator } from "./premium-calculator.model";
import { PremiumCalculatorService } from "../services/premium-calculator/premium-calculator.service";

@Component({
  selector: 'premium-calculator-component',
  templateUrl: './premium-calculator.component.html'
})
export class PremiumCalculatorComponent implements OnInit {

  private model: PremiumCalculator;
  private monthlyPremium;

  private beginDate;
  private endDate;
  public occupations: Occupation[];

  constructor(private premiumCalService: PremiumCalculatorService, private datePipe: DatePipe ) {
    this.premiumCalService.getOccupations()
      .subscribe(result => this.occupations = result, error => console.error(error));
  }

  ngOnInit(): void {
    this.model = new PremiumCalculator();
    this.monthlyPremium = 0;
    this.setMinMaxDate();
  }

  currencyInputChanged(value) {
    return Number(value.replace(/[$,]/g, ""));
  }

  private setMinMaxDate() {
    this.beginDate = new Date();
    this.beginDate.setFullYear(this.beginDate.getFullYear() - 70);
    this.beginDate = ((this.datePipe.transform(this.beginDate, 'yyyy-MM-dd')));

    this.endDate = new Date();
    this.endDate.setFullYear(this.endDate.getFullYear() - 16);
    this.endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd');
  }

  public onSubmit() {
    this.premiumCalService.calculatePremium(this.model)
      .subscribe(result => this.monthlyPremium = result, error => console.error(error));
  }

  public onOccupationChange(isFormValid) {
    if (isFormValid) {
      this.premiumCalService.calculatePremium(this.model)
        .subscribe(result => this.monthlyPremium = result, error => console.error(error));
    }
  }
}
