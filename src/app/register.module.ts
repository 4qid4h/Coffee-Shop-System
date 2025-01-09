//dekat sini kene import module yg gune dlm register

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { RegisterRoutingModule } from './register-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    MenuComponent,
    LandingpageComponent,
    NavbarComponent,
    UserLoginComponent,
    SignupComponent,
    ChartComponent,
   
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    QRCodeModule
    

  ]
})
export class RegisterModule { }
