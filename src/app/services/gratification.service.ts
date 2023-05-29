import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gratification } from '../classes/gratification';

@Injectable({
  providedIn: 'root'
})
export class GratificationService {
  private baseURL="http://127.0.0.1:8083/apiGratification";
  idgrafit:any;
  constructor(private httpClient:HttpClient) { }

  getGratificationList():Observable<Gratification[]>{
    return this.httpClient.get<Gratification[]>(`${this.baseURL}`);
  }

  getGratificationById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createGratification(gratification:Gratification):Observable<Gratification>{
    return this.httpClient.post<Gratification>(`${this.baseURL}`,gratification);
  }

  updateGratification(gratification:Gratification){
    return this.httpClient.put<Gratification>(`${this.baseURL}/${this.idgrafit}`,gratification);
  }

  getId(getId?:number){
    this.idgrafit=getId;
  }

  public deleteGratification(idgrafit?:number):Observable<Gratification>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idgrafit}`);
  }

  get(id:number):Observable<Gratification>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
  
}
