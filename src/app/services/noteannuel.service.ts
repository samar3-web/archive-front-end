import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noteannuel } from '../classes/noteannuel';

@Injectable({
  providedIn: 'root'
})
export class NoteannuelService {
  private baseURL="http://127.0.0.1:8083/apiNoteAnnuel";
  idnoteannuel:any;
  constructor(private httpClient:HttpClient) { }

  getNoteAnnuelList():Observable<Noteannuel[]>{
    return this.httpClient.get<Noteannuel[]>(`${this.baseURL}`);
  }

  getNoteAnnuelById(id:any):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createNoteAnnuel(noteannuel:Noteannuel):Observable<Noteannuel>{
    return this.httpClient.post<Noteannuel>(`${this.baseURL}`,noteannuel);
  }

  updateNoteAnnuel(noteannuel:Noteannuel){
    return this.httpClient.put<Noteannuel>(`${this.baseURL}/${this.idnoteannuel}`,noteannuel);
  }

  getId(getId?:number){
    this.idnoteannuel=getId;
  }

  public deleteNoteAnnuel(idnoteannuel?:number):Observable<Noteannuel>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${this.idnoteannuel}`);
  }

  get(id:number):Observable<Noteannuel>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
}
