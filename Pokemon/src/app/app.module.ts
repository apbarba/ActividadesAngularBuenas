import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { PokemonFotosComponent } from './pokemon-fotos/pokemon-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    PokemonFotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
