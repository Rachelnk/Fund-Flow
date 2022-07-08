import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {
  charities: any
  constructor( private charityService:CharityService) { }

  ngOnInit(): void {
    this.charityService.getCharities().subscribe(
      response=> {
        this.charities=response
        console.log(response)
      }
    )
  }

}
