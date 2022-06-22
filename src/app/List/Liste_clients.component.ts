import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { dataService } from '../data.service';
import {MatDialog} from '@angular/material/dialog';


import { DataService } from '../service/data.service';
import { ClientComponent } from '../client/client.component';
import { ClientEditComponent } from '../client-edit/client-edit.component';
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
  constructor(public dato: dataService,public dataservice:DataService,private router:Router, public client: MatDialog,public clientedit : MatDialog ) {  }
  ajouterAlert() {
    const clientgRef = this.client.open(ClientComponent,{
      width:'40%'
    });
  
    


   
    };
    editeralert(){
      const clienteditgRef = this.clientedit.open(ClientEditComponent,{
        width:'40%'
      })};
  clients:any;
  client1=new Client;
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
    this.dataservice.insertData(this.client1).subscribe(res =>{
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

