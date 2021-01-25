import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AppConstants } from './../constants/app.constants';
import { of, Observable, throwError } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap, catchError } from 'rxjs/operators';
import { account } from './../models/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private getAccountDetailsAPI = AppConstants.apiUrlGetAccountDetails;

  getAccountDetails(): Observable<account> {
    return this.http.get<account>(this.getAccountDetailsAPI);
  } 
}
