import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharityService {

  private url = 'https://funds-flow.herokuapp.com/api/charities/';
  // private url = 'http://127.0.0.1:8000/api/charities/';
  private urls = 'https://funds-flow.herokuapp.com/api/charities/';
  private burl = 'https://funds-flow.herokuapp.com/charity/charity_id/beneficiaries/';

   

  constructor(private httpClient: HttpClient) { }

  result:any
  getCharities(){
    return this.httpClient.get(this.url);
  }

  getCharityDetails(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/charities/'+id +'/')
    // return this.httpClient.get('http://127.0.0.1:8000/api/charities/'+id +'/')
  }
  getCharityBeneficiaries(id:any){
    return this.httpClient.get('https://funds-flow.herokuapp.com/charity/'+id +'/beneficiaries/')
    
  }
  public getCharityDashboardDetails(id:any):Observable<any>{
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/charity/' + id + '/charity/')

  }
  public getCharityBeneficiariesDashboardDetails(pk:any):Observable<any>{
    return this.httpClient.get('https://funds-flow.herokuapp.com/charity/1/beneficiaries')

  }
  public getCharityDonationsDashboardDetails(pk:any):Observable<any>{
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/charity/1/donations/')

  }
  public getCharityAnonymousDonationsDashboardDetails(pk:any):Observable<any>{
    return this.httpClient.get('https://funds-flow.herokuapp.com/api/charity/1/anon_donations/')

  }

}
