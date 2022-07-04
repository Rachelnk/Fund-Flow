import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CharitiesComponent } from './charities/charities.component';
import { DonateComponent } from './donate/donate.component';
import { DonateFormComponent } from './donate-form/donate-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    CharitiesComponent,
    DonateComponent,
    DonateFormComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule, 
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
