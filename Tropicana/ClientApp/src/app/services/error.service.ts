import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AppConstants } from './../constants/app.constants';
import { of, Observable, throwError } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap, catchError } from 'rxjs/operators';
import { errors } from './../models/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: HttpClient) { }

  private getAllErrorsAPI = AppConstants.apiUrlGetAllErrorDetails;

  getErrorListDetails(): Observable<errors[]> {
    return this.http.get<errors[]>(this.getAllErrorsAPI);
  }
}
