import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(
    private registerService : RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  formdata : Register = {
    id: '',
    name: '',
    order: '',
    phone: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = String(param.get('id'))
      this.getByid(id)
    })
  }

  getByid(id:string){
    this.registerService.edit(id).subscribe((data) => {
      this.formdata = data;

    })
  }

  update(){
    this.registerService.update(this.formdata). subscribe({
      next:(data) => {
        this.router.navigate(["/register/home"])  //after update order baru..akan bukak n display register list page
      },
      error: (er) => {
        console.log(er);
      }
    })
  }
 
  navToHome(){
    this.router.navigate(["/register/home"]) 
  }

  
}

