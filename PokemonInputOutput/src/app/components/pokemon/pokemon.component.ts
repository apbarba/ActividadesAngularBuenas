import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonDetails } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  getPokemonDetailsEvent = new EventEmitter<PokemonDetails>();

  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {

    this.pokemonServices.pokemonList().subscribe((resp) => {

      this.pokemonList = resp.results

    })  }

    getPokemonById(pokemon: Pokemon){
      
      let pokemonDetails: PokemonDetails;

      this.pokemonServices.getPokemonDetails(pokemon.url.split('/').reverse()[1]).subscribe(resp => {
        
        pokemonDetails = resp;
        
        this.getPokemonDetailsEvent.emit(pokemonDetails);
      });
    }

    getImg(url: string){

      let id = url.split("/").reverse()[1];
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`;
    }

  }
