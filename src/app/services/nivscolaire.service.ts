import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nivscolaire } from '../classes/nivscolaire';

@Injectable({
  providedIn: 'root'
})
export class NivscolaireService {
  private baseURL="http://127.0.0.1:8083/apiNiveauScolaire";
  idnivscol:any;
  constructor(private httpClient:HttpClient) { }
  
  getNiveauScolaireList():Observable<Nivscolaire[]>{
    return this.httpClient.get<Nivscolaire[]>(`${this.baseURL}`);
  }

  getNiveauScolaireById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createNiveauScolaire(nivscolaire:Nivscolaire):Observable<Nivscolaire>{
    return this.httpClient.post<Nivscolaire>(`${this.baseURL}`,nivscolaire);
  }

  updateNiveauScolaire(nivscolaire:Nivscolaire){
    return this.httpClient.put<Nivscolaire>(`${this.baseURL}/${this.idnivscol}`,nivscolaire);
  }

  getId(getId?:number){
    this.idnivscol=getId;
  }

  public deleteNiveauScolaire(idnivscol?:number):Observable<Nivscolaire>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idnivscol}`);
  }

  get(id:number):Observable<Nivscolaire>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
