import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterService {

  constructor(private http: HttpClient) { }

  // login(params: any): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/users/login`, params).pipe(
  //     map((resp: any) => {
  //       console.log(resp, "LOGINRESPONSE");
  //       return resp;
  //     })
  //   );
  // }


  // register(params: any): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/users/register`, params).pipe(
  //     map((resp: any) => {
  //       console.log(resp, "RegisterRESPONSE");
  //       return resp;
  //     })
  //   );
  // }
}
