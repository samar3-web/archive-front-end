import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Primerndment } from '../classes/primerndment';

@Injectable({
  providedIn: 'root'
})
export class PrimerndmentService {
  private baseURL="http://127.0.0.1:8083/apiPrimeRendement";
  idprimerdmnt:any;
  constructor(private httpClient:HttpClient) { }

  getPrmimeRendmentList():Observable<Primerndment[]>{
    return this.httpClient.get<Primerndment[]>(`${this.baseURL}`);
  }

  getPrimeRendmentById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createPrimeRendment(primerndment:Primerndment):Observable<Primerndment>{
    return this.httpClient.post<Primerndment>(`${this.baseURL}`,primerndment);
  }

  updatePrimeRendment(primerndment:Primerndment){
    return this.httpClient.put<Primerndment>(`${this.baseURL}/${this.idprimerdmnt}`,primerndment);
  }

  getId(getId?:number){
    this.idprimerdmnt=getId;
  }

  public deletePrimeRendment(idprimerdmnt?:number):Observable<Primerndment>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idprimerdmnt}`);
  }

  get(id:number):Observable<Primerndment>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
  
}
