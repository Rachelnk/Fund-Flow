import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptors';
import { FormsModule } from '@angular/forms';
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
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { DonorRegisterComponent } from './component/donor-register/donor-register.component';
import { CharityRegisterComponent } from './component/charity-register/charity-register.component';
import { FooterComponent } from './component/footer/footer.component';
import { CharityFormComponent } from './component/charity-form/charity-form.component';
import { AdminRegisterComponent } from './component/admin-register/admin-register.component';
import { MoreComponent } from './pages/more/more.component';
import { AdminDashComponent } from './component/admin-dash/admin-dash.component';

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
    DonorDashboardComponent,
    LoginComponent,
    NavbarComponent,
    AdminRegisterComponent,
    FooterComponent,
    DonorRegisterComponent,
    CharityRegisterComponent,
    CharityFormComponent,
    MoreComponent,
    AdminRegisterComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule, 
    RouterModule, 
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
