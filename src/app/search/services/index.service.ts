import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  constructor() { }

  getData(cpf: String) { 

    return {
      "name": "Mariane de Sousa Oliveira",
      "situation": "Regular",
      "account": "999999-9"
    
  }
  }
}
