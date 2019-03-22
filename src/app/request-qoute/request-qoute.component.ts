import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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


 constructor(private fb: FormBuilder, ) {
    this.rForm = fb.group({ 
      fullname: [null, Validators.required],
      company: [null, Validators.required],
      contactNumber: [null, Validators.required],
      email: [null, Validators.required],
      city: [null, Validators.required],
      province: [null, Validators.required],
      service: [null, Validators.required],
      timeframe: [null, Validators.required],
      budget: [null, Validators.required],
      description:  [null, Validators.required],
    });

  }
  ngOnInit() {

  }

}
