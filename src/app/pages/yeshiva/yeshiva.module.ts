import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeshivaComponent } from './yeshiva.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [YeshivaComponent],
  exports:[YeshivaComponent]
})
export class YeshivaModule { }
