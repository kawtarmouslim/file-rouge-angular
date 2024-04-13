import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login.model";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {LoggerUser} from "../models/logger-user.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   jwtHelperService = new JwtHelperService();
  user = new BehaviorSubject<LoggerUser | null>(null);
//   tokenExpirationTimer:any;
  constructor(private http:HttpClient, private router : Router) { }
  public login(user: LoginRequest): Observable<LoginResponse>{
    const formData  = new FormData();
    formData.append('username' , user.username);
    formData.append('password', user.password);
    return this.http.post<LoginResponse>(environment.backendHost+"/signin",user)
  }
  saveToken(jwtToken : LoginResponse)
   {
   const decodedAccessToken = this.jwtHelperService.decodeToken(jwtToken.accessToken);
    const loggedUser = new LoggerUser(decodedAccessToken.sub, decodedAccessToken.roles, jwtToken.accessToken, this.getExpirationDate(decodedAccessToken.exp));
     this.user.next(loggedUser);
    // this.autoLogout(this.getExpirationDate(decodedAccessToken.exp).valueOf()-new Date().valueOf());
    // localStorage.setItem("userData" , JSON.stringify(loggedUser));
     this.redirectLoggedInUse(decodedAccessToken, jwtToken.accessToken);
  }
  getExpirationDate(exp : number){
    const  date = new Date(0);
    date.setUTCSeconds(exp)
    return date;
  }
  redirectLoggedInUse(decodedToken: any, accessToken: string){
    if(decodedToken && decodedToken.roles && decodedToken.roles.includes("RESPONSABLE")) {
      this.router.navigateByUrl("/projections");
    } else if(decodedToken && decodedToken.roles && decodedToken.roles.includes("RESPONSABLE")) {
      this.router.navigateByUrl("/salles");
    } else if(decodedToken && decodedToken.roles && decodedToken.roles.includes("TECHNICIEN")) {
      this.router.navigateByUrl("/tickets");
    } else {
      // Gérer le cas où les rôles ne sont pas définis ou ne correspondent à aucun cas
    }
  }
}
