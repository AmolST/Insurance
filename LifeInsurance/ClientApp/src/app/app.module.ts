//framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//services
import { PremiumCalculatorService } from "./services/premium-calculator/premium-calculator.service";

//components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PremiumCalculatorComponent } from './premium-calculator/premium-calculator.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PremiumCalculatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'premium-calculator', component: PremiumCalculatorComponent }
    ])
  ],
  providers: [PremiumCalculatorService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
