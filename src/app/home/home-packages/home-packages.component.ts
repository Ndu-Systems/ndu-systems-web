import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-packages',
  templateUrl: './home-packages.component.html',
  styleUrls: ['./home-packages.component.scss']
})
export class HomePackagesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addToQuote() {
    this.router.navigate(['/request-quote']);
  }
}
