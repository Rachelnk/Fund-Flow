import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css'],
})
export class DonateFormComponent implements OnInit {
  donate: any
  charity = this.route.snapshot.params['id']

  form: any = {
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    amount_raised: null,
    donation_frequency: null,
    comment: null,
    charity: this.charity,


  };
  id: any
  donation_frequency: any = ['Once', 'Monthly', 'Annualy'];
  isSuccessful = false;
  errorMessage = '';


  constructor(private donateService: DonationService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.donateService.createDonation().subscribe(
      response => {
        this.donate = response
        console.log(response)
      }
    )
    this.charity = this.route.snapshot.params['id']
    console.log(this.charity)

  }

  onSubmit(donations: { first_name: string, last_name: string, email: string, phone_number: string, amount_raised: string, donation_frequency: string, comment: string, charity: number }) {
    this.http.post('https://funds-flow.herokuapp.com/api/donations/', donations).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(["/paypal"]).then(() => {
      window.location.reload();
    });
    console.log(donations)
  }
  onSubmitAnonymous(anonymousDonations: { donation_amount: number, comment: string, charity: number }) {
    this.http.post('https://funds-flow.herokuapp.com/api/anon/', anonymousDonations).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(["/paypal"]).then(() => {
      window.location.reload();
    });
    console.log(anonymousDonations)
  }


}
