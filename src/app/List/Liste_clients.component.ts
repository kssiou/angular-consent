import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { dataService } from '../data.service';

import { DataService } from '../service/data.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-List',
  templateUrl: './Liste_clients.component.html',
  styleUrls: ['./Liste_clients.component.scss']
})

export class ListComponent implements OnInit {
a:string='cloud';
  constructor(public dato: dataService,public dataservice:DataService,private router:Router ) {  }
  clients:any;
  client=new Client;
  parametrage:any;
  displayedColumns: string[] = ['id', 'Nom', 'Nom_d_entreprise', 'Email','Lien_du_site','button'];
  
  dataSource: any;
  ngOnInit(): void {
    this.getClientData();
    console.log(this.clients);
    //his.dataSource = this.clients;
   // console.log(this.dataSource);

  }
  
  getClientData() {

    //console.log('liste des clients');
    
    this.dataservice.getData().subscribe(res =>{
      console.log(res);
      this.clients=res;
          this.dataSource = this.clients;
          console.log(this.dataSource);

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
