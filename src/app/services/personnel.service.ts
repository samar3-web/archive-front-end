import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../classes/personnel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  private baseURL="http://127.0.0.1:8080/personnel";
  matricule: any;
  constructor(private httpClient: HttpClient) { }

  getPersonnelList(): Observable<Personnel[]>{
    return this.httpClient.get<Personnel[]>(`${this.baseURL}`);
  }

  getPersonnelById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createPersonnel(personnel:Personnel):Observable<Personnel>{
    return this.httpClient.post<Personnel>(`${this.baseURL}`,personnel);
  }

  updatePersonnel(personnel:Personnel){
    return this.httpClient.put<Personnel>(`${this.baseURL}/${this.matricule}`,personnel);
  }

  getId(getId?: number){
    this.matricule = getId;
  }

  public deletePersonnel(id?: number) : Observable<Personnel>{
    return this.httpClient.delete<object>(`${this.baseURL}/${id}`);
  }

  get(id: number): Observable<Personnel> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  findBynom(nom:any) : Observable<Personnel[]>{
    return this.httpClient.get<Personnel[]>(`${this.baseURL}?username=${nom}`);
  }

}
