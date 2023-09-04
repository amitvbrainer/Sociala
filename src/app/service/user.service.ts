import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://1cc8-27-109-15-102.ngrok-free.app/';
  constructor(public http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'api/User/UserRegistration', user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'api/User/UserSignIn', user);
  }

  recoverEmail(userEmail:any) {
    return this.http.post<any>(this.apiUrl + 'api/User/RecoverEmail?email=' + userEmail, null);
  }
}
