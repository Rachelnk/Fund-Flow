import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { DonorRegisterComponent } from './component/donor-register/donor-register.component';
import { CharityRegisterComponent } from './component/charity-register/charity-register.component';
import { FooterComponent } from './component/footer/footer.component';
import { CharityFormComponent } from './component/charity-form/charity-form.component';
import { AdminRegisterComponent } from './component/admin-register/admin-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DonorRegisterComponent,
    CharityRegisterComponent,
    FooterComponent,
    CharityFormComponent,
    AdminRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
