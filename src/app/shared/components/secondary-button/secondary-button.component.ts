import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent implements OnInit {

  constructor() { }

  @Input() text!: string;
  
  ngOnInit(): void {
  }

}
