import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginFormGroup !: FormGroup;
  submitted : boolean =false;
  constructor(private fb : FormBuilder,
              private authService : AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username : ["" , [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:["",Validators.required]
    })

  }


  onLogin() {
    console.log(this.loginFormGroup.value);
    this.submitted = true;
   // if (this.loginFormGroup.invalid) return;
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: loginResponse => {
        this.authService.saveToken(loginResponse);
        console.log(loginResponse);
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error("Erreur lors de la connexion :", err);

      }
    });
  }


}
