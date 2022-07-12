import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private url = 'https://funds-flow.herokuapp.com/api/donations/'
  // private urls = 'http://127.0.0.1:8000/api/donations/'
  constructor(private httpClient: HttpClient) {
    
   }
   createDonation () {
    return this.httpClient.get(this.url)
   }

  postDonation(first_name:string,last_name:string, email:string, phone_number:string,amount_raised:string,donation_frequency:string,comment:string,charity:number):Observable<any> {
    // return this.http.post(AUTH_API + 'signin/', {
      return this.httpClient.post(this.url, {
      first_name,
      last_name, 
      email, 
      phone_number,
      amount_raised,
      donation_frequency,
      comment,
      charity

    }, httpOptions);
  }
}
