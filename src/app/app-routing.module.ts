import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { AboutComponent } from './pages/about/about.component';
import { DonorDashboardComponent } from './pages/donor-dashboard/donor-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MoreComponent } from './pages/more/more.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { CharitiesComponent } from './charities/charities.component';
import { LoginComponent } from './component/login/login.component';
import { CharityRegisterComponent } from './component/charity-register/charity-register.component';
import { DonorRegisterComponent } from './component/donor-register/donor-register.component';
import { CharityFormComponent } from './component/charity-form/charity-form.component';
import { AdminRegisterComponent } from './component/admin-register/admin-register.component';
import { CharityDashboardComponent } from './charity-dashboard/charity-dashboard.component';

// import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  {path: 'charities/donate/:id', component: DonateComponent },
  {path: 'contact', component: ContactComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'team',component:TeamComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'donor-dashboard',component:DonorDashboardComponent},
  {path: 'charities', component:CharitiesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'charity-register', component:CharityRegisterComponent},
  {path: 'donor-register',component:DonorRegisterComponent},
  {path: 'charity-form',component:CharityFormComponent},
  {path: 'admin-register',component:AdminRegisterComponent},
  {path: 'charity-dashboard', component:CharityDashboardComponent},
  {path:'more',component:MoreComponent}
];



// const routes: Routes = [
//   {path:'',component:HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'team',component:TeamComponent},
//   {path:'testimonial',component:TestimonialComponent},
//   {path:'donor-dashboard',component:DonorDashboardComponent}
// ];


// const routes: Routes = [
//   {path: 'login', component:LoginComponent},
//   {path: 'charity-register', component:CharityRegisterComponent},
//   {path: 'donor-register',component:DonorRegisterComponent},
//   {path: 'charity-form',component:CharityFormComponent},
//   {path: 'admin-register',component:AdminRegisterComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =  [DonateComponent, ContactComponent]
export const routingComponents = [ LoginComponent, CharityRegisterComponent, DonorRegisterComponent, CharityFormComponent, AdminRegisterComponent]
