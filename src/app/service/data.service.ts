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

deletetData(id:any){
  return this.httpClient.delete('http://127.0.0.1:8000/api/deleteclient/'+id);
  
}
getClientById(id:any){
  return this.httpClient.get('http://127.0.0.1:8000/api/client/'+id);
}

updateClient(id:any,data:Client){
  return this.httpClient.put('http://127.0.0.1:8000/api/updateclient/'+id,data);
}
getChoixById(id:any){
  return this.httpClient.get('http://127.0.0.1:8000/api/choix/'+id);
}
updateChoix(id:any,param:Parametrage){
  return this.httpClient.put('http://127.0.0.1:8000/api/updatechoix/'+id,param);
}

}

