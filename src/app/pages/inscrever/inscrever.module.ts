import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscreverComponent } from './inscrever.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [InscreverComponent],
  exports:[InscreverComponent]
})
export class InscreverModule { }
