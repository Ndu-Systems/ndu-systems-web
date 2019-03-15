import { Component } from '@angular/core';
import { NavigationEventEmiter } from './navigation/navigationEventEmiter';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ndu-systems-web';
  showNav: boolean;
  constructor() { }

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
