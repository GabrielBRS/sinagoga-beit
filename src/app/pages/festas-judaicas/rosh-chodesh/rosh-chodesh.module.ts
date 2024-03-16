import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoshChodeshComponent } from './rosh-chodesh.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [RoshChodeshComponent],
  exports:[RoshChodeshComponent]
})
export class RoshChodeshModule { }
