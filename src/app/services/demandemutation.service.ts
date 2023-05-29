import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Demandemutation } from '../classes/demandemutation';

@Injectable({
  providedIn: 'root'
})
export class DemandemutationService {
  private apiUrl = 'http://localhost:8080/demande-mutations';

  constructor(private http: HttpClient) { }

  createDemandeMutation(demandeMutation: Demandemutation): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(this.apiUrl, demandeMutation, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
