import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { NavigationEventEmiter } from './navigationEventEmiter';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() closeNavAction: EventEmitter<
  NavigationEventEmiter> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    this.closeNavAction.emit({
      closeNav: true
    });
  }
}
