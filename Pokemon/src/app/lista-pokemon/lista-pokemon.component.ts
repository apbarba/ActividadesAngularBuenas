import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon-response.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
    
  listadoPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void { 

    this.pokemonService.pokemonList().subscribe(response => {  //Cuando llege el dato del servidor, se guardará los datos en esa variable que hemos creado

      this.listadoPokemon = response.results;
    });

  }

  getPokemonFotos(url: string): string{

    if(url){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(url)}.png`;
    
    }else {

      return '';
    }

  }
  getPokemonId(url: string):string {

    if(url){

      let splitArray = url.split("/");
      
      return splitArray[6];

    }else{

      return '';
    }
  }

}
