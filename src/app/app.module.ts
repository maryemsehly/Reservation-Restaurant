import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecAppComponent } from './sec-app/sec-app.component';
import { FormsModule, NgForm ,ReactiveFormsModule,} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { LundiComponent } from './lundi/lundi.component';
import { MardiComponent } from './mardi/mardi.component';
import { MercrediComponent } from './mercredi/mercredi.component';
import { JeudiComponent } from './jeudi/jeudi.component';
import { VendrediComponent } from './vendredi/vendredi.component';


@NgModule({
  declarations: [
    AppComponent,
    SecAppComponent,
    NavComponent,
    LoginComponent,
    SecAppComponent,
    AccueilComponent,
    ReserveComponent,
    ContactComponent,
    LundiComponent,
    MardiComponent,
    MercrediComponent,
    JeudiComponent,
    VendrediComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }
