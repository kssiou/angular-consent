import { Component, OnInit } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot, UrlTree } from '@angular/router';

import { Admin } from '../admin';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin=new Admin ;

  constructor(public dataservice:DataService ,private route:Router ) { }

  ngOnInit(): void {
  
  }
check(){
  this.dataservice.login(this.admin).subscribe(res =>{
    this.dataservice.permission=res;
    console.log( this.dataservice.permission);
    if(this.dataservice.permission){
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
     this.route.navigate(['/List']);
    }

  }
    )
}
}
