import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
​
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  stateCache = new Map();
  cityCache = new Map();
​
  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application-json',
      'X-CSCAPI-KEY': 'TE1JOHdlNFFET1pMUG55OXVBOU4zWWlaZEp1MGhhQzhWaW9YZ0c4TA=='
    })
  }
​
  getCountries(): Observable<any> {
    return this.http.get<any>('https://api.countrystatecity.in/v1/countries', 
    {headers: this.httpOptions.headers})
  }
​
  getStatesByCountry(countryIso: any) : Observable<any> {
    return this.http.get<any>(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`, 
    {headers: this.httpOptions.headers})
  }
​
  getCitiesByState(countryIso: string, stateIso: string) : Observable<any> {
    return this.http.get<any>(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`, 
    {headers: this.httpOptions.headers})
  }
​
  getCitiesByCountry(countryIso: string) : Observable<any> {
    return this.http.get<any>(`https://api.countrystatecity.in/v1/countries/${countryIso}/cities`, 
    {headers: this.httpOptions.headers})
  }
}