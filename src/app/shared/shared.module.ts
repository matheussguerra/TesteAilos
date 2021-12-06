import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Card2Component } from './components/card2/card2.component';



@NgModule({
  declarations: [
    CardComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    Card2Component
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CardComponent,
    Card2Component,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ]
})
export class SharedModule { }
