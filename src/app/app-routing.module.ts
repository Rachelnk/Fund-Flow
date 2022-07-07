import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { AboutComponent } from './pages/about/about.component';
import { DonorDashboardComponent } from './pages/donor-dashboard/donor-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { CharitiesComponent } from './charities/charities.component';
// import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  {path: 'donate', component: DonateComponent },
  {path: 'contact', component: ContactComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'team',component:TeamComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'donor-dashboard',component:DonorDashboardComponent},
  {path: 'charities', component:CharitiesComponent},
  // {path: 'more', component:MoreComponent},
];



// const routes: Routes = [
//   {path:'',component:HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'team',component:TeamComponent},
//   {path:'testimonial',component:TestimonialComponent},
//   {path:'donor-dashboard',component:DonorDashboardComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =  [DonateComponent, ContactComponent]