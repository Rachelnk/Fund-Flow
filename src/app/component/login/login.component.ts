import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username:null,
    password:null,
  };

  isLoggedIn =  false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private tokenstorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenstorage.getToken())
    this.isLoggedIn = true

  }
  onSubmit(): void {
    const {username, password} = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        console.log(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.router.navigate(["/charity-form"])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true
      });
  }

}
