import { Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
a:string='cloud';
  constructor(public dato: dataService) {  }

  ngOnInit(){
  }

}
