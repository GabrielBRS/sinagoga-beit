import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { HomeModule } from './pages/home/home.module';
import { FooterModule } from './components/footer/footer.module';
import { ParashotModule } from './pages/parashot/parashot.module';
import { FestasJudaicasModule } from './pages/festas-judaicas/festas-judaicas.module';
import { QuemSomosModule } from './pages/quem-somos/quem-somos.module';
import { SinagogaBeitTefilahModule } from './pages/sinagoga-beit-tefilah/sinagoga-beit-tefilah.module';
import { EditoraModule } from './pages/editora/editora.module';
import { ContribuaModule } from './pages/contribua/contribua.module';
import { InscreverModule } from './pages/inscrever/inscrever.module';
import { YeshivaModule } from './pages/yeshiva/yeshiva.module';
import { ContatoModule } from './pages/contato/contato.module';
import { EntrarModule } from './pages/entrar/entrar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    HomeModule,
    FooterModule,
    ParashotModule,
    FestasJudaicasModule,
    QuemSomosModule,
    SinagogaBeitTefilahModule,
    EditoraModule,
    ContribuaModule,
    InscreverModule,
    YeshivaModule,
    ContatoModule,
    EntrarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
