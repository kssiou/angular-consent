import { Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';
import { Parametrage } from '../parametrage';

import { DataService } from '../service/data.service';
@Component({
  selector: 'app-products',
  templateUrl: './Liste_clients.component.html',
  styleUrls: ['./Liste_clients.component.scss']
})
export class ProductsComponent implements OnInit {
a:string='cloud';
  constructor(public dato: dataService,public dataservice:DataService ) {  }
  clients:any;
  client:any;
  parametrage:any;
  param=new Parametrage;
  position_x_gui='right';
  
  ngOnInit(): void {
    this.getClientData();

  }
  
  getClientData() {

    console.log('liste des clients');
    console.log(this.position_x_gui)
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
      //console.log(res);
      this.getClientData();
    })
  }
  deleteData(id:any){
    //console.log(id);
    this.dataservice.deletetData(id).subscribe(res =>{
      //console.log(res);
      this.getClientData();
    })
  
  }
}
