import { Component, OnInit } from '@angular/core';
import { dataService } from '../data.service';

@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.scss']
})
export class CoupensComponent implements OnInit {

  constructor(public dato:dataService) { }

  ngOnInit(): void {
    console.log(this.dato.layout);
  }

}
