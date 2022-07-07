import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CharityRegisterComponent } from './component/charity-register/charity-register.component';
import { DonorRegisterComponent } from './component/donor-register/donor-register.component';
import { CharityFormComponent } from './component/charity-form/charity-form.component';
import { AdminRegisterComponent } from './component/admin-register/admin-register.component';
import { AdminDashComponent } from './component/admin-dash/admin-dash.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'charity-register', component:CharityRegisterComponent},
  {path: 'donor-register',component:DonorRegisterComponent},
  {path: 'charity-form',component:CharityFormComponent},
  {path: 'admin-register',component:AdminRegisterComponent},
  {path: 'admin-dash',component:AdminDashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, CharityRegisterComponent, DonorRegisterComponent, CharityFormComponent, AdminRegisterComponent, AdminDashComponent]