import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.component.html',
  styleUrls: ['./donor-dashboard.component.css']
})
export class DonorDashboardComponent implements OnInit {

  constructor(private userService:UserService, private http:HttpClient,private tokenStorageService:TokenStorageService ) { }
  currentUser:any
  user:any
  is_donor?:boolean
  // const API_URL= "http://funds-flow.herokuapp.com/";

  
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.http.get('http://funds-flow.herokuapp.com/users/' + this.currentUser.id + '/',httpOptions).subscribe(data => {
      console.log(data)
      this.user=data
    })
    // this.currentUser = this.tokenStorageService.getUser();
    // this.user = this.userService.getLoggedInUser();
    // console.log(this.user)

  }

}
