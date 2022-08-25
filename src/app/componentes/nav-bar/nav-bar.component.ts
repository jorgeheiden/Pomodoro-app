import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  fecha!:any
  hora!:any
  minutos!:any
  segundos!:any
  amPm:any
  cambioColor$: Observable<any>
  constructor(private servicio:ServiceService) {
    this.cambioColor$ = servicio.getCambioColor
   }

  ngOnInit(): void {
    this.horario()
  }

  horario(){
    setInterval( () => {
      this.fecha = new Date()
      this.hora = this.fecha.getHours()
      this.minutos = this.fecha.getMinutes()
      this.segundos = this.fecha.getSeconds()

      this.hora > 12 ? this.amPm = "PM" : this.amPm = "AM";
      this.segundos < 10 ? this.segundos = "0" + this.segundos: this.segundos
      this.minutos < 10 ? this.minutos = "0" + this.minutos : this.minutos
      this.hora < 10 ? this.hora = "0" + this.minutos : this.minutos
      
    }, 1000)
  }
}
