import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarUserComponent } from './nav-bar-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [NavBarUserComponent],
  exports:[NavBarUserComponent]
})
export class NavBaUserModule { }
