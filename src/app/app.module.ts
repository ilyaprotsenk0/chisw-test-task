import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';
import { InvestFormComponent } from './components/invest-form/invest-form.component';

@NgModule({
  declarations: [AppComponent, LoanComponent, InvestFormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
