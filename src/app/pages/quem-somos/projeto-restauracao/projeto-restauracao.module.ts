import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoRestauracaoComponent } from './projeto-restauracao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ProjetoRestauracaoComponent],
  exports:[ProjetoRestauracaoComponent]
})
export class ProjetoRestauracaoModule { }
