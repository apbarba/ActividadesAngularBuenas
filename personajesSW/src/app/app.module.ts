import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { PersonajesFotosComponent } from './personajes-fotos/personajes-fotos.component';
import { PersonajesComponent } from './componentes/personajes-lista/personajes.component';

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
