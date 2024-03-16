import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioFestaComponent } from './calendario-festa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [CalendarioFestaComponent],
  exports:[CalendarioFestaComponent]
})
export class CalendarioFestaModule { }
