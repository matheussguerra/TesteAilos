import { Component, OnInit } from '@angular/core';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  faBell = faBell;
  faCog = faCog
  
  ngOnInit(): void {

  }

}
