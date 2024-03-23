import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavBarModule,
    FooterModule,
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
