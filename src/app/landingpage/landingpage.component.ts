import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  constructor (private router: Router) {}

navigateCreate(){
  this.router.navigate(['register/create'])
}

navigateToMenu(){
  this.router.navigate(['register/menu'])
}
}
