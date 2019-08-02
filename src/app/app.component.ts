import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationEventEmiter } from './navigation/navigationEventEmiter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  title = 'ndu-systems-web';
  showNav: boolean;


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
