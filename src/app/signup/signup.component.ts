import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public signupForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router :Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email : [''],
      password : [''],
      mobile: ['']
    });
  }

  signUp(){
    this.http.post<any> ("http://localhost:3001/signupUsers", this.signupForm.value)
    .subscribe(res => {
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['register/user-login']);
    } ,err=>{
      alert("Something went wrong")

    })
  }
}
