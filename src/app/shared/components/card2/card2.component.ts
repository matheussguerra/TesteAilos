import { Component, OnInit } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }

  faCreditCard = faCreditCard
  ngOnInit(): void {
  }

}
