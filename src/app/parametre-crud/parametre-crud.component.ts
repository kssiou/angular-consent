import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametrage } from '../parametrage';
import { Client } from '../client';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-parametre-crud',
  templateUrl: './parametre-crud.component.html',
  styleUrls: ['./parametre-crud.component.scss']
})
export class ParametreCrudComponent implements OnInit {
  id:any;

  a:string='cloud';
  constructor(public dato: dataService,public dataservice:DataService,private router:Router,private route:ActivatedRoute ) {  }
  clients:any;

  parametrage:any;
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getChoixData();

  }
  
  getChoixData() {

    console.log('liste des clients');
    
    this.dataservice.getChoixById(this.id).subscribe(res =>{
      console.log(res);
      this.parametrage=res;
    }
      )
  }
  


  
}
