import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { CharityService } from '../services/charity.service';


@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent implements OnInit {
  donate:any
  charity:any

  constructor(private donateService:DonationService) { }

  ngOnInit(): void {
    this.donateService.createDonation().subscribe(
      response=> {
        this.donate=response
        console.log(response)
      }
    )
    
  }

}
