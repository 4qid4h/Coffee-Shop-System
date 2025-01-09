import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RegisterModule } from './register/register.module';
import { CreateComponent } from './register/create/create.component';
import { NavbarComponent } from './register/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegisterModule,
    
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
