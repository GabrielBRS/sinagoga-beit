import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParashotComponent } from './parashot.component';
import { RouterModule } from '@angular/router';
import { CalendarioModule } from './calendario/calendario.module';
import { OnlineModule } from './online/online.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CalendarioModule,
    OnlineModule,
  ],
  declarations: [ParashotComponent],
  exports:[ParashotComponent]
})
export class ParashotModule { }
