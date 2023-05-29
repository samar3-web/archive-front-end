import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demandemutation } from '../classes/demandemutation';

@Injectable({
  providedIn: 'root'
})
export class DemandemutationService {
  private baseURL="http://127.0.0.1:8083/apiDemandeMutation";
  iddemandemutation:any;
  constructor(private httpClient: HttpClient) { }

  getDemandeMutationList():Observable<Demandemutation[]>{
    return this.httpClient.get<Demandemutation[]>(`${this.baseURL}`);
  }

  getDemandeMutationById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createDemandeMutation(demandemutation:Demandemutation):Observable<Demandemutation>{
    return this.httpClient.post<Demandemutation>(`${this.baseURL}`,demandemutation);
  }

  updateDemandeMutation(demandemutation:Demandemutation){
    return this.httpClient.put<Demandemutation>(`${this.baseURL}/${this.iddemandemutation}`,demandemutation);
  }

  getId(getId?:number){
    this.iddemandemutation=getId;
  }

  public deleteDemandeMutation(iddemandemutation?:number):Observable<Demandemutation>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.iddemandemutation}`);
  }

  get(id:number):Observable<Demandemutation>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
