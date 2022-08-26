import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RelojComponent } from './componentes/reloj/reloj.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { InformacionComponent } from './componentes/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RelojComponent,
    TareasComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
