import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuaComponent } from './contribua.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ContribuaComponent],
  exports:[ContribuaComponent]
})
export class ContribuaModule { }
