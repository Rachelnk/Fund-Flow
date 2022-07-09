import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharityService {

  private url = 'https://funds-flow.herokuapp.com/api/charities/';
  private urls = 'https://funds-flow.herokuapp.com/api/charities/2/';

   

  constructor(private httpClient: HttpClient) { }

  
  getCharities(){

    return this.httpClient.get(this.url);

  }
}
