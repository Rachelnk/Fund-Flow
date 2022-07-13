import { Component, OnInit } from '@angular/core';
import { AdminDashService } from 'src/app/admin-dash.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  isAuthenticated = false;
  username:any
  isLoggedIn = false;
  constructor(private adminDashService:AdminDashService, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.isAuthenticated = true;
    }
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
  deleteItem(charity:any){
    this.adminDashService.deleteCharity(charity.id)
        .subscribe(response => {
          this.charities = this.charities.filter((item:any) => item.id !== charity.id);
          alert("Charity Deleted")
        });
  }
  deleteUser(user:any){
    this.adminDashService.deleteUser(user.id)
        .subscribe(response => {
          this.users = this.users.filter((item:any) => item.id !== user.id);
          alert("User Deleted")
        });
  }
  

}
