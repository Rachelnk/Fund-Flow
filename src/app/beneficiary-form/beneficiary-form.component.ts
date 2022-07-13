import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { CharityService } from '../services/charity.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { countries } from 'src/app/shared/country-data-store';
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-beneficiary-form',
  templateUrl: './beneficiary-form.component.html',
  styleUrls: ['./beneficiary-form.component.css']
})
export class BeneficiaryFormComponent implements OnInit {
  public countries:any = countries
  charity:any = this.tokenStorageService.getUser().id;
  currentUser:any
  charities:any
  id:any
  isSuccessful =  false;
  pk:any
  form: any = {
    // beneficiary_name: null,
    // contact: null,
    // location: null,
    // country: null,
    // donation_received: null,
    // charity:this.charity

  };
  constructor(private http:HttpClient, private tokenStorageService:TokenStorageService,private router:Router,private charityService:CharityService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
    console.log(this.id)
    this.getCharity(this.id)
  }
  getCharity(_id:any){
    this.charityService.getCharityDashboardDetails(this.id).subscribe((charities=>{
      this.charities = charities;
      console.log(this.charity[0].id)
      this.id = this.charity[0].id;

    }))
  }
  postBeneficiary(forms:{beneficiary_name:string,contact:number, location:string,country: string, donation_received:string}) {
    this.http.post('https://funds-flow.herokuapp.com/charity/'+this.id+'/beneficiaries/', this.form,httpOptions).subscribe((res) => {
      console.log(res);
      this.isSuccessful = true;
  })
    // }, err=>{
    //   alert(err.error.errorMessage)
    //   // console.err('error caught in component')
    // })
    // this.router.navigate(["/paypal"]).then(() => {
    //   window.location.reload();
    // });
    console.log(forms)
  }

}
