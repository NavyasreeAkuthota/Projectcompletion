import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  registerForm:any; //form name

  ngOnInit(): void{
    this.registerForm=new FormGroup({

      "emailId": new FormControl(null, [Validators.required,Validators.email]),
      "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "password": new FormControl(null,[Validators.required,Validators.pattern('[a-z0-9@]')]),
      "confirmpassword": new FormControl(null,[Validators.required,Validators.pattern('[a-z0-9@]')]),
      "mobilenumber" : new FormControl(null,[Validators.required,Validators.pattern('[0-9]')]),
      });
  }
   //submit function 
  submitData(){
    console.log(this.registerForm.value);

  }

  get emailid(){ return this.registerForm.get('emailId')} 
  get name(){ return this.registerForm.get('name')}
  get password(){ return this.registerForm.get('password')}
  get confirmpassword(){ return this.registerForm.get('confirmpassword')}
  get mobilenumber(){ return this.registerForm.get('mobilenumber')}
  



}
