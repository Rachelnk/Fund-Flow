import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DonorDashboardComponent } from './pages/donor-dashboard/donor-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MoreComponent } from './pages/more/more.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'team',component:TeamComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'donor-dashboard',component:DonorDashboardComponent},
  {path:'more',component:MoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
