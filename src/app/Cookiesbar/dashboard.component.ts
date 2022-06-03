import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
selectedDay:string='';
//

  clients:any;
  client=new Client;
  image:string="/assets/images/vector-button.png";
  code:string="/assets/code/ui.html";
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getClientData();
  }
 
  
getClientData() {
  console.log('liste des clients');
  this.dataservice.getData().subscribe(res =>{
    console.log(res);
    this.clients=res;
  }
    )
}
insertData(){
  //console.log('bonjour-insertion-test');
  //console.log(this.product);
  this.dataservice.insertData(this.client).subscribe(res =>{
    console.log(res);
    //this.getClientData();
  })
}
 
}
  

