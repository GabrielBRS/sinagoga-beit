import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuirComponent } from './shuir.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ShuirComponent],
  exports:[ShuirComponent]
})
export class ShuirModule { }
