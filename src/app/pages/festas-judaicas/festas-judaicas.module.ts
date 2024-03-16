import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestasJudaicasComponent } from './festas-judaicas.component';
import { RouterModule } from '@angular/router';
import { CalendarioFestaModule } from './calendario/calendario-festa.module';
import { RoshChodeshModule } from './rosh-chodesh/rosh-chodesh.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CalendarioFestaModule,
    RoshChodeshModule,
  ],
  declarations: [FestasJudaicasComponent],
  exports:[FestasJudaicasComponent]
})
export class FestasJudaicasModule { }
