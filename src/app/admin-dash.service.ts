import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  private url = 'https://funds-flow.herokuapp.com/users/';
  // private url = 'http://127.0.0.1:8000/api/charities/';
  private urls = 'https://funds-flow.herokuapp.com/api/charities/';
  private burl = 'https://funds-flow.herokuapp.com/api/donors/';
  private burls = 'https://funds-flow.herokuapp.com/api/feedback';


   

  constructor(private httpClient: HttpClient) { }

  result:any
  getUsers(){
    return this.httpClient.get(this.url);
  }
  getCharities(){
    return this.httpClient.get(this.urls);
  }
  getDonors(){
    return this.httpClient.get(this.burl);
  }
  getFeedBack(){
    return this.httpClient.get(this.burls);
  }

  getCharityDetails(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/charities/'+id +'/')
    // return this.httpClient.get('http://127.0.0.1:8000/api/charities/'+id +'/')
  }
  getUsersDetails(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/users/'+id +'/')
    // return this.httpClient.get('http://127.0.0.1:8000/api/charities/'+id +'/')
  }
  getDonorsDetails(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/donors/'+id +'/');
    // return this.httpClient.get('http://127.0.0.1:8000/api/charities/'+id +'/')
  }
  getFeedBackDetails(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/feedback/'+id +'/');
    // return this.httpClient.get('http://127.0.0.1:8000/api/charities/'+id +'/')
  }
  deleteCharity(id:any){
    return this.httpClient.delete('https://funds-flow.herokuapp.com/api/charities/'+id);
  }
  deleteUser(id:any){
    return this.httpClient.delete('https://funds-flow.herokuapp.com/users/'+id);
  }
  approve(status:any){
    // return this.httpClient.put('https://funds-flow.herokuapp.com/')
  }
  decline(status:any){

  }
}
