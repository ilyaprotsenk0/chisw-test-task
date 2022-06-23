import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';
import { InvestFormComponent } from './components/invest-form/invest-form.component';
import { MonthsDaysFromSecondsPipe } from './pipes/months-days-from-seconds.pipe';
import { DotToCommaPipe } from './pipes/dot-to-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    InvestFormComponent,
    MonthsDaysFromSecondsPipe,
    DotToCommaPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
