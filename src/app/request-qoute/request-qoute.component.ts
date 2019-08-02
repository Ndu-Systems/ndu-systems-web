import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailService } from '../_services';

@Component({
  selector: 'app-request-qoute',
  templateUrl: './request-qoute.component.html',
  styleUrls: ['./request-qoute.component.scss']
})
export class RequestQouteComponent implements OnInit {
  rForm: FormGroup;



  services: Array<string> = [
    'Web design',
    'Custom Software',
    'No Sure',
  ];
  timeframes: Array<string> = [
    'Within a month',
    'Two months time',
    'No Sure',
  ];
  budgets: Array<string> = [
    'Less than R10 000',
    'Less than R25 000',
    'Private Budget',
  ];


  constructor(private fb: FormBuilder, private emailService: EmailService, private route: Router) {
    this.rForm = fb.group({
      fullname: [null, Validators.required],
      company: [null],
      contactNumber: [null, Validators.required],
      email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      city: [null],
      province: [null, Validators.required],
      service: [null],
      timeframe: [null],
      budget: [null],
      description: [null],
    });
  }
  ngOnInit() { }
  get formData() {
    return this.rForm.controls;
  }
  submitQuery() {


    const data = {
      Name: this.formData.fullname.value,
      Email: this.formData.email.value,
      ContactNumber: this.formData.contactNumber.value,
      CompanyName: this.formData.company.value,
      Province: this.formData.province.value,
      City: this.formData.city.value,
      HasProjectInfo: false,
      Services: this.formData.service.value,
      Timeframe: this.formData.timeframe.value,
      Budget: this.formData.budget.value,
      ProjectDescription: this.formData.description.value
    };

    this.emailService.sendEmail(data)
      .subscribe(response => {
        if (response > 0) {
          alert('Email was sent successfully, Press Ok to Continue');
          this.route.navigate(['our-services']);
        }
      });
  }
}
