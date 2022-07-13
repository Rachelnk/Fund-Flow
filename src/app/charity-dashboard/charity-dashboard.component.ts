import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CharityService } from '../services/charity.service';

@Component({
  selector: 'app-charity-dashboard',
  templateUrl: './charity-dashboard.component.html',
  styleUrls: ['./charity-dashboard.component.css']
})
export class CharityDashboardComponent implements OnInit {
  currentUser: any
  charityId: any
  id: any
  details: any
  beneficiaries: any
  data:any
  pk:any;
  constructor(private charityService: CharityService, private tokenStorageService: TokenStorageService, private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    // console.log(this.currentUser.id);
    this.id = this.currentUser.id;
    this.getCharity(this.id)
    this.getBeneficiaries(this.pk)
  }

  getCharity(_id: any) {
    this.charityService.getCharityDashboardDetails(this.id).subscribe((response => {
      this.details = response[0]
      // console.log(this.details)
      this.pk = this.details.id
      console.log(this.pk)

    }));

  }
  getBeneficiaries(pk:number){
    this.charityService.getCharityBeneficiariesDashboardDetails(this.pk).subscribe((res => {
      console.log(res)
      this.data = res.map((items:any)=> {
        this.beneficiaries = items
        console.log(items)
      })
    }));
  }
}


