import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router){ }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email:[''],
      password: ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3001/signupUsers")
    .subscribe(res => {
      const user = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });

      if (user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['register/landingpage'])
      }else{
        alert("user not found");
      }
    
    }, err=>{ 
      alert("Something went wrong !!")

    })
    }
}



