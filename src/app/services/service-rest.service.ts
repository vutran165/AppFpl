import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServiceEntity } from './service';

const endpoint = 'https://samples.openweathermap.org/data/2.5';
const _URL = 'https://fantasy.premierleague.com/drf/bootstrap-static';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  }),
};

@Injectable(

)

export class ServiceRestService {

  constructor(private http: HttpClient) { }


  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getServices() {
    return this.http.get(_URL, httpOptions);
  }

  public getServiceById(id): Observable<any> {
    return this.http.get(endpoint + 'service/' + id).pipe(
      map(this.extractData));
  }

  public addService(service): Observable<any> {
    return this.http.post(endpoint + 'service/', service).pipe(
      map(this.extractData)
    );
  }

}
