import { Component, OnInit } from '@angular/core';
import { NavigationEventEmiter } from '../navigation/navigationEventEmiter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNav: boolean;
  constructor() { }

  ngOnInit() {
  }

  openNav(event: NavigationEventEmiter) {
    if (!event.closeNav) {
      this.showNav = true;
    }
  }

  closeNav(event: NavigationEventEmiter) {
    if (event.closeNav) {
      this.showNav = false;
    }
  }

}
