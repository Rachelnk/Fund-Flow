import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private url = 'https://funds-flow.herokuapp.com/api/donations/'

  constructor(private httpClient: HttpClient) {
    
   }
   createDonation () {
    return this.httpClient.get(this.url)
   }
}
