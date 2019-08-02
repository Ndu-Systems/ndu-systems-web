import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  title: any;
  constructor() { }

  ngOnInit() {

    if (this.title === null || this.title === undefined) {
      this.title = 'Ndu systems';
    }
  }
}
