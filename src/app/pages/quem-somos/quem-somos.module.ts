import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from './quem-somos.component';
import { RouterModule } from '@angular/router';
import { ProjetoRestauracaoModule } from './projeto-restauracao/projeto-restauracao.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProjetoRestauracaoModule,
  ],
  declarations: [QuemSomosComponent],
  exports:[QuemSomosComponent]
})
export class QuemSomosModule { }
