import { Component, OnInit, Query } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnInit {

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
   
  }

  intervalId:any
  segundos:any = "00"
  minutos = 25
  starStop = false
  btn = "inicio"
  msjConfirm!:any
  borde = false
  bordeVerde = true
  bordeAzul = false
  bordeAzul2 = false
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
      if(this.segundos == 0 && this.minutos == 0){
        this.playAudio()
        setTimeout( () => {
          alert("Finalizado!")
        }, 500)
        this.pararConteo()
        this.segundos = "00"
        this.minutos = 5
        this.borde = true
        this.servicio.setCambioColorValor = true
      }
      
    },1000)
  }

  iniciarConteo(){
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
      this.iniciarConteo()
    }
    else{
      this.pararConteo()
    }
  }
  
  //Pomodoro
  pomodoro(){
    if(this.starStop == true){
      this.msjConfirm = confirm("Reloj corriendo, Quieres cambiar?")
      if(this.msjConfirm == true){
        this.segundos = "00"
        this.minutos = 25
        this.pararConteo()
        this.borde = true
        this.bordeAzul = false
        this.bordeAzul2 = false
        this.servicio.setCambioColorValor = false
      }
    }
    else{
      this.segundos = "00"
      this.minutos = 25
    }
    this.borde = false
    this.bordeVerde = true
    this.bordeAzul = false
    this.bordeAzul2 = false
    this.servicio.setCambioColorValor = false
  }
  //Descanso Corto
  descanso(){
    if(this.starStop == true){
      this.msjConfirm = confirm("Reloj corriendo, Quieres cambiar?")
      if(this.msjConfirm == true){
        this.segundos = "00"
        this.minutos = 5
        this.pararConteo()
        this.borde = true
        this.bordeAzul = true
        this.bordeAzul2 = false
        this.bordeVerde = false
        this.servicio.setCambioColorValor = true
      }
    }
    else{
      this.segundos = "00"
      this.minutos = 5
      this.borde = true
      this.bordeAzul = true
      this.bordeAzul2 = false
      this.bordeVerde = false
      this.servicio.setCambioColorValor = true
    }
    
  }
  //Descanso Largo
  descansoLargo(){
    if(this.starStop == true){
      this.msjConfirm = confirm("Reloj corriendo, Quieres cambiar?")
      if(this.msjConfirm == true){
        this.segundos = "00"
        this.minutos = 15
        this.pararConteo()
        this.borde = true
        this.bordeAzul2 = true
        this.bordeAzul = false
        this.bordeVerde = false
        this.servicio.setCambioColorValor = true
      }
    }
    else{
      this.segundos = "00"
      this.minutos = 15
      this.borde = true
      this.bordeAzul2 = true
      this.bordeAzul = false
      this.bordeVerde = false
      this.servicio.setCambioColorValor = true
    }
  }
  playAudio(){
    let audio = new Audio()
    audio.src = "../../../assets/audio/mixkit-racing-countdown-timer-1051.wav"
    audio.load()
    audio.play()
  }
}

