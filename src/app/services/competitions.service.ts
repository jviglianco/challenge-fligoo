import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  private url = environment.urlBackend + '/Competitions';

  constructor(private httpClient: HttpClient) { }

  getCompetitions(): Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

  getCompetitionByCode(code: string): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/${code}`);
  }
}
