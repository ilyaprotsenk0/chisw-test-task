import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';
import { InvestFormComponent } from './components/invest-form/invest-form.component';
import { MonthsDaysFromSecondsPipe } from './pipes/months-days-from-seconds.pipe';
import { ThousandsThoughtCommaPipe } from './pipes/thousands-thought-comma';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    InvestFormComponent,
    MonthsDaysFromSecondsPipe,
    ThousandsThoughtCommaPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
