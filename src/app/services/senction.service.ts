import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Senction } from '../classes/senction';

@Injectable({
  providedIn: 'root'
})
export class SenctionService {
  private baseURL="http://127.0.0.1:8083/apiSenction";
  idsenction:any;
  constructor(private httpClient:HttpClient) { }


  getSenctionList():Observable<Senction[]>{
    return this.httpClient.get<Senction[]>(`${this.baseURL}`);
  }

  getSenctionById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createSenction(senction:Senction):Observable<Senction>{
    return this.httpClient.post<Senction>(`${this.baseURL}`,senction);
  }

  updateSenction(senction:Senction){
    return this.httpClient.put<Senction>(`${this.baseURL}/${this.idsenction}`,senction);
  }

  getId(getId?:number){
    this.idsenction=getId;
  }

  public deleteSenction(idgrafit?:number):Observable<Senction>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idsenction}`);
  }

  get(id:number):Observable<Senction>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
