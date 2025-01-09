import { Component } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  formdata: Register = {
    id: '', // ID will be set by the service
    name: '',
    order: '',
    phone: '' 
  }

  constructor(private registerService: RegisterService, private router: Router) {}

  create() {
    this.registerService.create(this.formdata).subscribe({
      next: (data) => {
        // Navigate to  register/home page after successful creation
        this.router.navigate(['/register/home']);
      },
      error: (er) => {
        console.error('Failed to create registration:', er);
      }
    });
  }
}