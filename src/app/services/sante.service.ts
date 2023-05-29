import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sante } from '../classes/sante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanteService {
  private baseURL="http://127.0.0.1:8083/apiSante";
  idsante:any;
  constructor(private httpClient:HttpClient) { }


  getSanteList():Observable<Sante[]>{
    return this.httpClient.get<Sante[]>(`${this.baseURL}`);
  }

  getSanteById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createSante(sante:Sante):Observable<Sante>{
    return this.httpClient.post<Sante>(`${this.baseURL}`,sante);
  }

  updateSante(sante:Sante){
    return this.httpClient.put<Sante>(`${this.baseURL}/${this.idsante}`,sante);
  }

  getId(getId?:number){
    this.idsante=getId;
  }

  public deleteSenction(idgrafit?:number):Observable<Sante>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idsante}`);
  }

  get(id:number):Observable<Sante>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
