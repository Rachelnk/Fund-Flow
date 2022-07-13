import { Component, OnInit } from '@angular/core';
import { AdminDashService } from 'src/app/admin-dash.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  charities:any
  details:any
  info: any;
  users:any
  donors:any
  feedbacks: any;

  constructor(private adminDashService:AdminDashService) { }

  ngOnInit(): void {
    this.allCharities();
    this.allUsers();
    this.allDonors();
    this.allFeedBack();
  }
  allCharities(){
    this.adminDashService.getCharities().subscribe(data =>{
      this.charities = data
      console.log(data)
    })
  
  }
  allDonors(){
    this.adminDashService.getDonors().subscribe(data =>{
      this.donors = data
      console.log(data)
    })
  
  }
  allUsers(){
    this.adminDashService.getUsers().subscribe(data =>{
      this.users = data
      console.log(data)
    })
  
  }
  allFeedBack(){
    this.adminDashService.getFeedBack().subscribe(data =>{
      this.feedbacks = data
      console.log(data)
    })
  
  }

}
