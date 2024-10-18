import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SecAppComponent } from './sec-app/sec-app.component'
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { LundiComponent } from './lundi/lundi.component';
import { MardiComponent } from './mardi/mardi.component';
import { MercrediComponent } from './mercredi/mercredi.component';
import { JeudiComponent } from './jeudi/jeudi.component';
import { VendrediComponent } from './vendredi/vendredi.component';
const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path:'sec-app', component :SecAppComponent },
  {path:'app', component:AppComponent},
  {path:'accueil' , component:AccueilComponent},
  {path:'reserve' , component:ReserveComponent},
  {path:'contact' , component:ContactComponent},
  {path:'lundi' , component:LundiComponent},
  {path:'mardi' , component:MardiComponent},
  {path:'mercredi' , component:MercrediComponent},
  {path:'jeudi' , component:JeudiComponent},
  {path:'vendredi' , component:VendrediComponent}

];

@NgModule({
  imports: [
  CommonModule,
  [RouterModule.forRoot(routes)],],
  exports: [RouterModule]
})
export class AppRoutingModule { }
