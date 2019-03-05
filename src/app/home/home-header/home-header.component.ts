import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavigationEventEmiter } from 'src/app/navigation/navigationEventEmiter';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  @Output() openNavAction: EventEmitter<NavigationEventEmiter> =
    new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openNav(){
    this.openNavAction.emit({
      closeNav: false
    })
  }

}
