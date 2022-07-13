import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Countries } from 'src/app/shared/country';
import { countries } from 'src/app/shared/country-data-store';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const httpOptions = {
  headers:new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-charity-form',
  templateUrl: './charity-form.component.html',
  styleUrls: ['./charity-form.component.css']
})
export class CharityFormComponent implements OnInit {
  loading:any
  public countries:any = countries
  user:any = this.tokenStorageService.getUser().id;
  form: any = {
    charity_name:null,
    charity_image:null,
    email:null,
    amount_raised:null,
    donation_frequency:null,
    comment:null,
    user:this.user
  };

  id:any
  target_amount:any= ['100000', '200000', '300000','400000','500000','600000','700000','800000','900000','1000000'];
  isSuccessful =  false;
  errorMessage = '';
  is_charity?:boolean
  currentUser:any

  constructor(private router:Router,private http:HttpClient,private tokenStorageService:TokenStorageService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.user = this.currentUser.id
    console.log(this.currentUser)
  

  }
  

  onSubmit(charity: {charity_name:string,charity_image:File, email:string, location:string,country:string,target_amount:number,mission:string,date_formed:Date,deadline:Date,comment:string,user:number}){
    this.currentUser = this.tokenStorageService.getUser();
    this.user = this.currentUser.id
    console.log(this.user)
    this.http.put('https://funds-flow.herokuapp.com/api/post_details/' + this.user + '/' ,charity).subscribe((res)=>{
      console.log(res);
      alert('Charity Details sent Successfully')
      this.router.navigate(["charity-dashboard"]).then(() => {
      window.location.reload();
    });
    });
      // console.log(charity)
    }
}

