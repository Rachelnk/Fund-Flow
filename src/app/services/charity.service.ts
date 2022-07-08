import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharityService {
  private url = 'https://funds-flow.herokuapp.com/api/charities/'
  // https://funds-flow.herokuapp.com/api/<int:pk>/


  constructor( private httpClient: HttpClient) {

   }

   getCharities () {
    return this.httpClient.get(this.url)
   }

}
