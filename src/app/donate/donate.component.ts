import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  charities:any

  constructor(private charityService: CharityService) { }

  ngOnInit(): void {
    this.charityService.getCharities().subscribe(
      response=> {
        this.charities=response
        console.log(response)
      }
    )
  }

}
