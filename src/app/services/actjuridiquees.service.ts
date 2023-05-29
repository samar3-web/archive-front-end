import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actjuridiquees } from '../classes/actjuridiquees';

@Injectable({
  providedIn: 'root'
})
export class ActjuridiqueesService {
  private baseURL="http://127.0.0.1:8083/apiActJuridiqueES";
  idactjuridiquees:any;

  constructor(private httpClient: HttpClient) { }

  getActJuridiqueESList():Observable<Actjuridiquees[]>{
    return this.httpClient.get<Actjuridiquees[]>(`${this.baseURL}`);
  }

  getActJuridiqueESById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createActJuridiqueES(actjuridiquees:Actjuridiquees):Observable<Actjuridiquees>{
    return this.httpClient.post<Actjuridiquees>(`${this.baseURL}`,actjuridiquees);
  }

  updateActJuridiqueES(actjuridiquees:Actjuridiquees){
    return this.httpClient.put<Actjuridiquees>(`${this.baseURL}/${this.idactjuridiquees}`,actjuridiquees);
  }

  getId(getId?:number){
    this.idactjuridiquees=getId;
  }

  public deleteActJuridiqueES(idactjuridiquees?: number):Observable<Actjuridiquees>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idactjuridiquees}`);
  }

  get(id:number):Observable<Actjuridiquees>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
