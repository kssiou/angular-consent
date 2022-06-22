import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { DataService } from './service/data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router , dataService:DataService){}
  token:any;
  canActivate(){
    this.token=localStorage.getItem('token');
    if(this.token){
    return true ;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }

  }
  
}
