import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component';
import { FilteredCarsComponent } from './filtered-cars/filtered-cars.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'AboutUs',component:AboutUSComponent},
  {path:'ContactUs', component:ContactComponent},
  {path:'Cars', component:CarsComponent},
  // {path:'filteredCars/:link', component:FilteredCarsComponent},
  {path:'filteredCars', component:FilteredCarsComponent},
  {path:'SignIn', component:SignInComponent},
  {path:'SignUp', component:SignUpComponent},
  {path:'**', component:WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
