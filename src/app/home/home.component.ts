import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 

    allregister: Register[] = [];
  
    constructor( private registerService: RegisterService , private router: Router){} //yg ni wajib declare kat sini klau nak gune
  
    //DISPLAY DATA
    ngOnInit(): void {
      this.registerService.getAll().subscribe((data) => {
      this.allregister = data;
      })
    }

    deleteItem(id: string) {
      this.registerService.delete(id).subscribe({
         next: (data) => {
            this.allregister = this.allregister.filter(item => item.id !== id);
         },
         error: (err) => {
            console.error('Error deleting item', err);
         }
      });
   }

    }


