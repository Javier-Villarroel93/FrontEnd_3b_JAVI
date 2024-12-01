import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl=environment.urlsServidor 
  private http=inject(HttpClient)
  
  //constructor(private http: HttpClient) { } de esta forma se inyectaba en versiones anteriroes en angular

  constructor() {}
    loginConNest(credenciales: any){
      return this.http.get<any>(`${this.baseUrl}/todos`);
  }

  registroConNest(credenciales: any){
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales);
  }

}
