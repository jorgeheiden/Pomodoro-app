import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  constructor() {
    
   }
  claseOcultarAgregarTarea = false
  claseOcultarEditarTarea = true
  //Se crea un array al cual se le insertan objetos con los datos necesarios
  tareas:any = []
  valor = true
  checkValor!:any
  localStorageValues!:any
  obtenerLocalStorage:any
  
  ngOnInit(): void {

   this.obtenerLocalStorage = localStorage.getItem("tasks")
    this.tareas = JSON.parse(this.obtenerLocalStorage)
    console.log(this.obtenerLocalStorage)
    console.log(this.tareas)
  }

  Agregar(){
    this.claseOcultarAgregarTarea = true
    this.claseOcultarEditarTarea = false
  }
  aceptar(tarea:any){
    this.claseOcultarAgregarTarea = false
    this.claseOcultarEditarTarea = true
    /*************** ****************/
    this.tareas.push({'tarea': tarea, "checkValor": false})
    /************** *****************/
    localStorage.setItem("tasks", JSON.stringify(this.tareas))

    this.obtenerLocalStorage = localStorage.getItem("tasks")
    this.tareas = JSON.parse(this.obtenerLocalStorage)


  }
  cancelar(){
    this.claseOcultarEditarTarea = true
    this.claseOcultarAgregarTarea = false
    
   
  }
  eliminarTarea(data:any){
    let indice = this.tareas.indexOf(data)
    this.tareas.splice(indice, 1)
    localStorage.setItem("tasks", JSON.stringify(this.tareas))
  }
  //
  tacharTarea(tarea:any, evento:any){
    this.checkValor = evento.target.checked
    this.tareas[this.tareas.indexOf(tarea)].checkValor = this.checkValor
    localStorage.setItem("tasks", JSON.stringify(this.tareas))
  }

}
