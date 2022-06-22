import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  id:any;
  client=new Client;
  data: any;
  clients:any;


  constructor(private route:ActivatedRoute,private dataservice:DataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData(){
    this.dataservice.getClientById(this.id).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.client = this.data;
      }
    )
  }
  updateClient(){
    this.dataservice.updateClient(this.id,this.client).subscribe(
      res => {this. getClientData();
        
      }
    )
  }
  getClientData() {

    console.log('liste des clients');
//    console.log(this.position_x_gui)
    this.dataservice.getData().subscribe(res =>{
      console.log(res);
      this.clients=res;
    }
      )
  }
 
}
