import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accolade } from '../classes/accolade';
@Injectable({
  providedIn: 'root'
})
export class AccoladeService {
  private baseURL="http://127.0.0.1:8083/apiAccolade";
  idAccolade:any;
  constructor(private httpClient: HttpClient) { }

  getAccoladeList():Observable<Accolade[]>{
    return this.httpClient.get<Accolade[]>(`${this.baseURL}`);
  }

  getAccoladeById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createAccolade(accolade:Accolade):Observable<Accolade>{
    return this.httpClient.post<Accolade>(`${this.baseURL}`,accolade);
  }

  updateAccolade(accolade:Accolade){
    return this.httpClient.put<Accolade>(`${this.baseURL}/${this.idAccolade}`,accolade);
  }

  getId(getId?:number){
    this.idAccolade=getId;
  }

  public deleteAccolade(idAccolade?:number):Observable<Accolade>{
    return this.httpClient.delete<object>(`${this.baseURL}/${this.idAccolade}`);
  }

  get(id: number): Observable<Accolade> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
