import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})

export class DonateComponent implements OnInit {
  charity:any
  id:any
  beneficiaries:any
  constructor(private charityService: CharityService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCharity();
    this.getBeneficiary();
  }
  getCharity(){
    this.charityService.getCharityDetails(this.id).subscribe(data=>{

      this.charity=data

    })
  }
  getBeneficiary(){
    this.charityService.getCharityBeneficiaries(this.id).subscribe(results=>{
      this.beneficiaries=results
      console.log(this.beneficiaries)
    })

  }



}
