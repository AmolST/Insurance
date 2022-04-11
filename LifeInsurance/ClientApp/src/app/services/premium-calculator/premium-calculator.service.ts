import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

import { Occupation } from "../../premium-calculator/premium-calculator.model";


@Injectable()
export class PremiumCalculatorService {
  private baseUrl: string;
  private occupations: Occupation[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getOccupations(): Observable<Occupation[]> {
    return this.http.get<Occupation[]>(this.baseUrl + 'api/LifeInsurance');
  }

  calculatePremium(premiumCalculateFormValue): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(premiumCalculateFormValue);
    return this.http.post(this.baseUrl + 'api/LifeInsurance', body, { 'headers': headers });
  }
}
