import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainContentComponent,
    StepperComponent,
    FormComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class SearchModule { }
