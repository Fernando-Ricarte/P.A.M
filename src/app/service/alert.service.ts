import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  mostraAlerta(){
    alert("Módulo utilizado apenas para realização de testes com ionic.")
  }
}