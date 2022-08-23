import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  constructor() { }
  claseOcultarAgregarTarea = false
  claseOcultarEditarTarea = true
  tareas:any = []
  ngOnInit(): void {
  }

  Agregar(){
    this.claseOcultarAgregarTarea = true
    this.claseOcultarEditarTarea = false
  }
  aceptar(data:any){
    this.claseOcultarAgregarTarea = false
    this.claseOcultarEditarTarea = true
    this.tareas.push(data)
    console.log(this.tareas)
  }
  cancelar(){
    this.claseOcultarEditarTarea = true
    this.claseOcultarAgregarTarea = false
  }
  eliminarTarea(data:any){
    let indice = this.tareas.indexOf(data)
    this.tareas.splice(indice, 1)
    console.log(this.tareas)
  }

}
