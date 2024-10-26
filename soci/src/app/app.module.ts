import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { TesseraSocioComponent } from './components/tessera-socio/tessera-socio.component';
import { VerificaSocioComponent } from './components/verifica-socio/verifica-socio.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    TesseraSocioComponent,
    VerificaSocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
