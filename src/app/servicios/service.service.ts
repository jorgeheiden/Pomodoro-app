import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private cambioColorObservable: BehaviorSubject<any> = new BehaviorSubject<any>(false)

  get getCambioColor(){
    return this.cambioColorObservable.asObservable()
  }
  set setCambioColorValor(dato:any){
    this.cambioColorObservable.next(dato)
  }
}
