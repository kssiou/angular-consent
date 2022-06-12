import { Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client=new Client;
  clients: any;
  
  constructor(public dataservice:DataService) { }
  insertData(){
    //console.log('bonjour-insertion-test');
    //console.log(this.product);
    this.dataservice.insertData(this.client).subscribe(res =>{
      //console.log(res);
      this.getClientData();
    })
  
  }getClientData() {

    console.log('liste des clients');
//    console.log(this.position_x_gui)
    this.dataservice.getData().subscribe(res =>{
      console.log(res);
      this.clients=res;
    }
      )
  }
  ngOnInit(): void {
     this.getClientData();
     
  }

}
