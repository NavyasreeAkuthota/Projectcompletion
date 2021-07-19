import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators,FormBuilder, NgForm } from '@angular/forms'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  data:any;
  constructor(){

  }
 ngOnInit(): void{

 }
 Registers(regForm:NgForm)
 {
   if(regForm.valid)
   this.data= regForm.value;
 }
  


  
  
  
  
    
}
