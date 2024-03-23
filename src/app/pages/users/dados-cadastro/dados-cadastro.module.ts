import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosCadastroComponent } from './dados-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DadosCadastroComponent],
  exports:[DadosCadastroComponent]
})
export class DadosCadastroModule { }
