import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidateCPF } from 'src/app/shared/utils/cpf-validator';
import { IndexService } from '../services/index.service';



export interface User {
  name: String
  situation: String
  account: String
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Output() formSubmissionData = new EventEmitter<User>();
  
  constructor(private indexService: IndexService) { }

  searchByCpfForm = new FormGroup({
    cpf: new FormControl('', [Validators.minLength(14), Validators.maxLength(14), ValidateCPF])
  });

  get cpf() {return this.searchByCpfForm.get('cpf')}



  user: User | undefined;
  
  submit(){
    this.user = this.indexService.getData(this.searchByCpfForm.get('cpf')?.value);
    this.formSubmissionData.emit(this.user);
  }

  ngOnInit(): void {
    this.searchByCpfForm.controls['cpf'].valueChanges.subscribe(data => {
      let cpf = data.replace(/\D/g,"")
      cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
      this.searchByCpfForm.controls['cpf'].setValue(cpf, {emitEvent: false});
    });
  }

}
