import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.css']
})
export class DonorRegisterComponent implements OnInit {
  form: any = {
    username:null,
    email:null,
    last_name:null,
    first_name:null,
    password1:null,
    password2:null,

  };


  isSuccessful =  false;
  isSignUpFailed = false;
  errorMessage = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {username, email,last_name,first_name, password1,password2} = this.form;
    this.authService.register(username, email, last_name,first_name, password1,password2).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/login"])
      },
      err => {
        this.errorMessage = err.error.message;
        alert(err)
        this.isSignUpFailed = true
      });
  }


}
