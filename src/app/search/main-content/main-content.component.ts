import { Component, OnInit } from '@angular/core';
import { User } from '../form/form.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  userData: User | undefined;

  recieveData(user: User) {
    this.userData = user;
  }

  ngOnInit(): void {
  }

}
