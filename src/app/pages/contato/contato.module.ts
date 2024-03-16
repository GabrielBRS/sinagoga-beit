import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  ],
  declarations: [ContatoComponent],
  exports:[ContatoComponent]
})
export class ContatoModule { }
