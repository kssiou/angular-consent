import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterContentChecked {
  value = 'Clear me';


  tabWay = "vert";
  layout = '';
  position_x='';
  position_y='';
  transition='';
  constructor(public dato:dataService) {

   }


   ngAfterContentChecked(): void {
    this.dato.layout=this.layout;
    this.dato.position_x=this.position_x;
    this.dato.position_y=this.position_y;
    this.dato.transition=this.transition;
  }

}
