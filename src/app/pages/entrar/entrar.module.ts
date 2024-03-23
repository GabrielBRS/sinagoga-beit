import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [EntrarComponent],
  exports:[EntrarComponent],
  providers:[LoginService]
})
export class EntrarModule {
  static forRoot(): ModuleWithProviders<EntrarModule> {
    return {
      ngModule: EntrarModule,
      providers: [
       LoginService
      ]
    }
  }
}
