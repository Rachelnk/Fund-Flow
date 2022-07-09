import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: any = {
    name:null,
    email:null,
    phone_number:null,
    subject:null,
    message:null,

  };
  isSuccessful =  false;
  errorMessage = '';
  
  constructor(public contactService: ContactService,public router:Router,private httpClient:HttpClient) { }
  
  ngOnInit(): void {
  }
  onSubmit(data:any): void {
    const {name, email, phone_number,subject,message} = this.form;
    this.contactService.postFeedback(name, email, phone_number,subject,message).subscribe(
      data => {
  console.log(data);
        this.isSuccessful = true;
        this.router.navigate(["/"])
      },
      err => {
        this.errorMessage = err.error.message;
      });

}
}
