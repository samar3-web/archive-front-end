import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../classes/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private baseURL="http://127.0.0.1:8083/apiPromotion";
  idpromotion:any;
  constructor(private httpClient:HttpClient) { }

  getPromotionList():Observable<Promotion[]>{
    return this.httpClient.get<Promotion[]>(`${this.baseURL}`);
  }

  getPromotionById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createPromotion(promotion:Promotion):Observable<Promotion>{
    return this.httpClient.post<Promotion>(`${this.baseURL}`,promotion);
  }

  updatePromotion(promotion:Promotion){
    return this.httpClient.put<Promotion>(`${this.baseURL}/${this.idpromotion}`,promotion);
  }

  getId(getId?:number){
    this.idpromotion=getId;
  }

  public deletePromotion(idpromotion?:number):Observable<Promotion>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idpromotion}`);
  }

  get(id:number):Observable<Promotion>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}