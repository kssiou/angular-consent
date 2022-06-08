import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Parametrage } from '../parametrage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private httpClient : HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clients');
  }
  insertData(data:Client){
    return this.httpClient.post('http://127.0.0.1:8000/api/addclient',data);
 }

 insertData2(data3:Parametrage) {
 return this.httpClient.post('http://127.0.0.1:8000/api/addchoix',data3);
}


}

