import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  faCheckCircle = faCheckCircle
  faUser = faUser

  ngOnInit(): void {
  }

}
