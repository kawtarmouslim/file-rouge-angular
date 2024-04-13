import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userSub !: Subscription;
  isAuthenticated = false;
  constructor(private  authService : AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(loggedUser =>{
      this.isAuthenticated =!!loggedUser;
    //   if (!this.isAuthenticated){
    //     this.initializeState();
    //   }
    //   else if(!!loggedUser){
    //     this.setRole(loggedUser);
    //     this.name=loggedUser?.username
    //   }
    })

  }

  logout() {

  }
}
