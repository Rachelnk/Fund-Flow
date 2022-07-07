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
import { CharityDashboardComponent } from './charity-dashboard/charity-dashboard.component';
import { CharitydetailsFormComponent } from './charitydetails-form/charitydetails-form.component';
import { BeneficiaryFormComponent } from './beneficiary-form/beneficiary-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { DonorDashboardComponent } from './pages/donor-dashboard/donor-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    CharitiesComponent,
    DonateComponent,
    DonateFormComponent,
    CharityDashboardComponent,
    CharitydetailsFormComponent,
    BeneficiaryFormComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    TestimonialComponent,
    DonorDashboardComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule, 
    RouterModule, 
    BrowserAnimationsModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
