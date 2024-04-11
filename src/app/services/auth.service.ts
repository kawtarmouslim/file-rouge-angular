import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  public login(user: LoginRequest): Observable<LoginResponse>{
    const formData  = new FormData();
    formData.append('username' , user.username);
    formData.append('password', user.password);
    return this.http.post<LoginResponse>(environment.backendHost+"/login",formData)
  }
}
