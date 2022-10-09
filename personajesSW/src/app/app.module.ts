import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { PersonajesFotosComponent } from './personajes-fotos/personajes-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PersonajesFotosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
