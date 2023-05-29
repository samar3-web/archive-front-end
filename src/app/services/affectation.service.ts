import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Affectation } from '../classes/affectation';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  private baseURL="http://127.0.0.1:8083/apiAffectation";
  idaffectation:any;
  constructor(private httpClient:HttpClient) { }

  getAffectationList():Observable<Affectation[]>{
    return this.httpClient.get<Affectation[]>(`${this.baseURL}`);
  }

  getAffectationById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createAffectation(affectation:Affectation):Observable<Affectation>{
    return this.httpClient.post<Affectation>(`${this.baseURL}`,affectation);
  }

  updateAffectation(affectation:Affectation){
    return this.httpClient.put<Affectation>(`${this.baseURL}/${this.idaffectation}`,affectation);
  }

  getId(getId?:number){
    this.idaffectation=getId;
  }

  public deleteAffection(idaffectation?:number):Observable<Affectation>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idaffectation}`);
  }

  get(id:number):Observable<Affectation>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
