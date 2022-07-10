import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharityService {

  private url = 'https://funds-flow.herokuapp.com/api/charities/';
  private urls = 'https://funds-flow.herokuapp.com/api/charities/';
  private burl = 'https://funds-flow.herokuapp.com/charity/charity_id/beneficiaries/';

   

  constructor(private httpClient: HttpClient) { }

  result:any
  getCharities(){
    return this.httpClient.get(this.url);
  }

  getCharityDetails(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/charities/'+id +'/')
    
  }
  getCharityBeneficiaries(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/charity/'+id +'/beneficiaries/')
    
  }

}
