import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {

  constructor(private http: HttpClient) { }
  
  API = 'https://data.covid19india.org/data.json'

  getStateData(): Observable<any> {
    return this.http.get<any>(this.API).pipe(
      map((data) => {
        return data.statewise;
      })
    )
  }


}
