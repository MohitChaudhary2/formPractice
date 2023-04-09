import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path: '', redirectTo:'landing', pathMatch:'full'},
  {path:'login', component:LoginFormComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'home', component:HomeComponent},
  {path: '**', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}