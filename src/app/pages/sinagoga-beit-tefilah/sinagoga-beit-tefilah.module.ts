import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinagogaBeitTefilahComponent } from './sinagoga-beit-tefilah.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],

  declarations: [SinagogaBeitTefilahComponent],
  exports:[SinagogaBeitTefilahComponent]
})
export class SinagogaBeitTefilahModule { }
