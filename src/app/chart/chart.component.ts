import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {


  data: any;
  dataamount:any[] = [];
  datayear : any[] =[];
  datacolor : any[] = [];
  databorder : any[] = [];

constructor(private registerService: RegisterService, private router: Router) {

}

ngOnInit(){


  this.registerService.showdata().subscribe(res=>{
    this.data =res;

    if(this.data!=null) {
      for(let i=0; i<this.data.length; i++){
        this.datayear.push(this.data[i].year);
        this.dataamount.push(this.data[i].amount);
        this.datacolor.push(this.data[i].color);
        this.databorder.push(this.data[i].bordercolor);


      }

    }

    this.showchartdata(this.datayear, this.dataamount, this.datacolor, this.databorder);
   
  })
 

}

showchartdata(datayear: any, dataamount:any, datacolor:any, databorder:any ){
  console.log(datayear);
  new Chart("myChart", {
    type: 'bar',   //bar, line,pie
    data: {
      labels: datayear,
      datasets: [{
        label: '# of Sales',
        data: dataamount,
        
      }]
    },
    
  }); 

}

}
