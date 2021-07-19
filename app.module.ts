import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ForgetpasswordComponent,
    AdminloginComponent,
    NewconnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    NgModule,
    NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
