import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit ,AfterContentChecked {
  value = 'Clear me';
  selectedDay:string='';
  
  layout = '';
    clients:any;
    client=new Client;

  tabWay = "vert";
  position_x: any;
  transition: any;
  
  constructor(public dataservice:DataService , public dato:dataService) {

   }
   

   ngAfterContentChecked(): void {
    this.dato.layout=this.layout;
    this.dato.position_x=this.position_x;
    this.dato.position_y=this.position_x;
    this.dato.transition=this.transition;
  }
  
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
