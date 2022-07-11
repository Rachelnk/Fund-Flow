import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Countries } from 'src/app/shared/country';
import { countries } from 'src/app/shared/country-data-store';
@Component({
  selector: 'app-charity-form',
  templateUrl: './charity-form.component.html',
  styleUrls: ['./charity-form.component.css']
})
export class CharityFormComponent implements OnInit {
  public countries:any = countries
  form: any = {
    charity_name:null,
    last_name:null,
    email:null,
    phone_number:null,
    amount_raised:null,
    donation_frequency:null,
    comment:null,
  


  };
  id:any
  donation_frequency:any= ['Once', 'Monthly', 'Annualy'];
  isSuccessful =  false;
  errorMessage = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }
  onSubmit(donations: {name:string,last_name:string, email:string, phone_number:string,amount_raised:string,donation_frequency:string,comment:string,charity:number}){
    this.http.post('https://funds-flow.herokuapp.com/api/donations/',donations).subscribe((res)=>{
      console.log(res);
    })
      console.log(donations)
    }

}
