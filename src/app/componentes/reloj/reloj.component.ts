import { Component, OnInit, Query } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  intervalId:any
  segundos:any = "00"
  minutos = 25
  starStop = false
  btn = "inicio"
  cuentaRegresiva(){
    if(this.segundos == "00"){
      this.segundos = 59
    }
    this.intervalId = setInterval( () =>{
      this.segundos -= 1
      if(this.segundos == -1){
        this.segundos = 59
        this.minutos -= 1
      }
      //reseteo al finalizar el conteo
      if(this.minutos == -1){
        this.minutos = 25
        this.segundos = "00"
        this.iniciarParar()
      }
      
    },1000)
  }

  inicarConteo(){
    setTimeout( () => {
      this.cuentaRegresiva()
    }, 1000)
    this.starStop = true
    this.btn = "Parar"
  }
  pararConteo(){
    clearInterval(this.intervalId)
    this.starStop = false
    this.btn = "Iniciar"
  }

  iniciarParar(){
    if(this.starStop == false){
      this.inicarConteo()
    }
    else{
      this.pararConteo()
    }
  }
  
  //Pomodoro
  pomodoro(){
    this.segundos = "00"
    this.minutos = 25
    this.pararConteo()
  }
  //Descanso
  descanso(){
    this.segundos = "00"
    this.minutos = 5
    this.pararConteo()
    
  }
  //Descanso Largo
  descansoLargo(){
    this.minutos = 15
  }
  /*
  reloj(){
    setInterval( () => {
  this.fecha = new Date()
  this.hora = this.fecha.getHours()
  this.minuto = this.fecha.getMinutes()
  this.segundo = this.fecha.getSeconds()
  this.milisegundo = this.fecha.getMilliseconds()
      if(this.segundo != this.segundo){
        
      }

    },200)
  
  }
*/

}

