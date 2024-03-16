import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoraComponent } from './editora.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [EditoraComponent],
  exports:[EditoraComponent]
})
export class EditoraModule { }
