import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actjuridiquehs } from '../classes/actjuridiquehs';

@Injectable({
  providedIn: 'root'
})
export class ActjuridiquehsService {
  private baseURL="http://127.0.0.1:8083/apiActJuridiqueHS";
  idactjuridiquehs:any;

  constructor(private httpClient: HttpClient) { }

  getActJuridiqueHSList():Observable<Actjuridiquehs[]>{
    return this.httpClient.get<Actjuridiquehs[]>(`${this.baseURL}`);
  }

  getActJuridiqueHSById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createActJuridiqueHS(actjuridiquehs:Actjuridiquehs):Observable<Actjuridiquehs>{
    return this.httpClient.post<Actjuridiquehs>(`${this.baseURL}`,actjuridiquehs);
  }

  updateActJuridiqueHS(actjuridiquehs:Actjuridiquehs){
    return this.httpClient.put<Actjuridiquehs>(`${this.baseURL}/${this.idactjuridiquehs}`,actjuridiquehs);
  }

  getId(getId?:number){
    this.idactjuridiquehs=getId;
  }

  public deleteActJuridiqueHS(idactjuridiquehs?: number):Observable<Actjuridiquehs>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idactjuridiquehs}`);
  }

  get(id:number):Observable<Actjuridiquehs>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
