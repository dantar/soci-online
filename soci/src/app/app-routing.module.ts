import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { TesseraSocioComponent } from './components/tessera-socio/tessera-socio.component';
import { VerificaSocioComponent } from './components/verifica-socio/verifica-socio.component';

const routes: Routes = [
  {path:'', component: MainLandingComponent},
  {path:'tessera', component: TesseraSocioComponent},
  {path:'tessera/:qr', component: TesseraSocioComponent},
  {path:'verifica', component: VerificaSocioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
