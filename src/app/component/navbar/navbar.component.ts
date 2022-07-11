import { Component, OnInit, Input } from '@angular/core';
import { Emiters } from 'src/app/emitters/emitter';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const API_URL = 'http://127.0.0.1:8000/';
const API_URL = "http://funds-flow.herokuapp.com/";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  isAuthenticated = false;
  is_staff = false;

  status?: boolean;
  userdetail: any;
  currentUser:any
  data:any
  is_donor?:boolean
  constructor(
    private tokenStorageService: TokenStorageService,
    public userService: UserService,
    private http:HttpClient
  ) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.isAuthenticated = true;
    }
    this.currentUser = this.tokenStorageService.getUser();
    return this.http.get(API_URL + 'users/' + this.currentUser.id + '/',httpOptions).subscribe(data => {
      this.data=data
    })
 
    
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  reloadPage(): void {
    window.location.reload();
  }
}
