import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const endPoint = 'https://soccer.sportmonks.com/api/v2.0/';
const apiToken = 'Dnf1nIjzL0Zhcl79w7kGMZyqOP0Yykgwj5VHjqrCg61IPoJB2ufS3KuVsiVb';

const url = '';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient) { }

  public extractData(response: Response) {
    const body = response;
    return body || {};
  }

  public getData(route): Observable<any> {
    return this.http.get(endPoint + route + '?' + 'api_token=' + apiToken);
  }

  public getDataById(route, id): Observable<any> {
    return this.http.get(endPoint + route + '/' + id + '?' + 'api_token=' + apiToken).pipe(map(this.extractData));
  }

  public postData(route, data): Observable<any> {
    return this.http.post(url + route, data).pipe(map(this.extractData));
  }

}
