import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { MinihomeComponent } from './minihome/minihome.component';
import { CartComponent } from './cart/cart.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { KidsComponent } from './kids/kids.component';
import { Viewproduct1Component } from './viewproduct1/viewproduct1.component';
import { Viewproduct2Component } from './viewproduct2/viewproduct2.component';
import { Viewproduct3Component } from './viewproduct3/viewproduct3.component';
import { Viewproduct4Component } from './viewproduct4/viewproduct4.component';
import { Viewproduct5Component } from './viewproduct5/viewproduct5.component';
import { ShippingaddressComponent } from './shippingaddress/shippingaddress.component';
import { ProfileComponent } from './profile/profile.component';
import { Page404notfoundComponent } from './page404notfound/page404notfound.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { Viewproduct6Component } from './viewproduct6/viewproduct6.component';




const routes: Routes = [
  { path: '', redirectTo: '/home/minihome', pathMatch: 'full' },
  { path:  'home', component:  HomeComponent,
  children: [
    { path: 'minihome', component: MinihomeComponent },
    { path: 'men', component: MenComponent },
    { path: 'women', component: WomenComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'handbags', component: HandbagsComponent },
    {path:'groceries',component:GroceriesComponent},
    {path:'healthcare',component:HealthcareComponent},
    { path: 'cart', component: CartComponent },
    { path:  'viewproduct1', component:  Viewproduct1Component},
    { path:  'viewproduct2', component:  Viewproduct2Component},
    { path:  'viewproduct3', component:  Viewproduct3Component},
    { path:  'viewproduct4', component:  Viewproduct4Component},
    {path:'viewproduct5',component:Viewproduct5Component},
    {path:'viewproduct6',component:Viewproduct6Component},
  ]
  },
  { path:  'login', component:  LoginComponent},
  { path:  'register', component:  RegisterComponent},
  { path:  'profile', component:  ProfileComponent},
  { path:  'shippingaddress', component:  ShippingaddressComponent},
  { path:  'page404notfound', component:  Page404notfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:"reload",useHash:true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
