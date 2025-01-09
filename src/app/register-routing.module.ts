import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './signup/signup.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
  {path: 'register/home', component: HomeComponent},
  {path: 'register', redirectTo:'register/home', pathMatch: 'full'},
  {path: '', redirectTo:'register/user-login', pathMatch: 'full'},
  {path:'register/create', component:CreateComponent},
  {path:'register/edit/:id', component: EditComponent},
  {path:'register/menu', component: MenuComponent},
  {path:'register/landingpage', component: LandingpageComponent},
  {path:'register/user-login' , component:UserLoginComponent},
  {path:'register/signup', component:SignupComponent},
  {path:'register/chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
