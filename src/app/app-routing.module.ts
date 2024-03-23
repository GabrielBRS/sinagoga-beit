import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParashotComponent } from './pages/parashot/parashot.component';
import { CalendarioComponent } from './pages/parashot/calendario/calendario.component';
import { FestasJudaicasComponent } from './pages/festas-judaicas/festas-judaicas.component';
import { CalendarioFestaComponent } from './pages/festas-judaicas/calendario/calendario-festa.component';
import { RoshChodeshComponent } from './pages/festas-judaicas/rosh-chodesh/rosh-chodesh.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ProjetoRestauracaoComponent } from './pages/quem-somos/projeto-restauracao/projeto-restauracao.component';
import { SinagogaBeitTefilahComponent } from './pages/sinagoga-beit-tefilah/sinagoga-beit-tefilah.component';
import { EditoraComponent } from './pages/editora/editora.component';
import { ContribuaComponent } from './pages/contribua/contribua.component';
import { InscreverComponent } from './pages/inscrever/inscrever.component';
import { YeshivaComponent } from './pages/yeshiva/yeshiva.component';
import { ShuirComponent } from './pages/parashot/shuir/shuir.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { UsersComponent } from './pages/users/users.component';
import { DadosCadastroComponent } from './pages/users/dados-cadastro/dados-cadastro.component';

const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'quem-somos', component:QuemSomosComponent},
    {path:'quem-somos/projeto-restauracao', component:ProjetoRestauracaoComponent},
    {path:'sinagoga-beit-tefilah', component:SinagogaBeitTefilahComponent},
    {path:'parashot', component:ParashotComponent},
    {path:'parashot/shuir', component:ShuirComponent},
    {path:'parashot/calendario', component:CalendarioComponent},
    {path:'festas', component:FestasJudaicasComponent},
    {path:'festas/calendario', component:CalendarioFestaComponent},
    {path:'festas/rosh-chodesh', component:RoshChodeshComponent},
    {path:'editora', component:EditoraComponent},
    {path:'contribua', component:ContribuaComponent},
    {path:'yeshiva', component:YeshivaComponent},
    {path:'contato', component:ContatoComponent},
    {path:'inscrever', component:InscreverComponent},
    {path:'entrar', component:EntrarComponent},
  ]},
  {path:'user', component:UsersComponent, children:[
    {path:'perfil', component:DadosCadastroComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
