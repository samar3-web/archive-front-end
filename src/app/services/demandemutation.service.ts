import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Demandemutation } from '../classes/demandemutation';
import { Personnel } from '../classes/personnel';

@Injectable({
  providedIn: 'root'
})
export class DemandemutationService {
  private apiUrl = 'http://localhost:8080/demande-mutations';

  constructor(private http: HttpClient) { }

  upload(file: File,cause:string,decision:string,datedemande:string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('cause',cause);
    formData.append('decision',decision);
    formData.append('datedemande',datedemande);
    //formData.append('personnel', personnel.toString());
  
    const req = new HttpRequest('POST', `${this.apiUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }

  
  

  getFiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/files`);
  }
}
