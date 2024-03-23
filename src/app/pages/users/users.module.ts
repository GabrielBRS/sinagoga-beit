import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { NavBaUserModule } from 'src/app/components/nav-bar-user/nav-bar-user.module';
import { DadosCadastroModule } from './dados-cadastro/dados-cadastro.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavBaUserModule,
    DadosCadastroModule,

  ],
  declarations: [UsersComponent],
  exports:[UsersComponent]
})
export class UsersModule { }
