import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = "http://funds-flow.herokuapp.com/";
// const AUTH_API = 'http://127.0.0.1:8000/'
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string):Observable<any> {
    // return this.http.post(AUTH_API + 'signin/', {
      return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email:string,last_name:string,first_name:string,password1: string,password2:string):Observable<any> {
    return this.http.post(AUTH_API + 'signup/', {
      username,
      email,
      last_name,
      first_name,
      password1,
      password2,

    }, httpOptions);
  }

  registerCharity(username: string, email:string, password1: string,password2:string):Observable<any> {
    return this.http.post(AUTH_API + 'signup-charity/', {
      username,
      email,
      password1,
      password2,

    }, httpOptions);
  }

  registerAdmin(username: string, email:string,last_name:string,first_name:string,password1: string,password2:string):Observable<any> {
    return this.http.post(AUTH_API + 'signup-admin/', {
      username,
      email,
      last_name,
      first_name,
      password1,
      password2,

    }, httpOptions);
  }
}
