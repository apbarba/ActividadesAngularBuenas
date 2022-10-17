import { Component, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../interfaces/pokemon-detalles';
import { Pokemon } from '../interfaces/pokemon-response';
import { PokemonDespregableService } from '../services/pokemon-despregable.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  listPokemon: Pokemon[] = [];
  pokemonSelec: PokemonDetailResponse | undefined;

  constructor(private pokemonService: PokemonDespregableService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {

      this.listPokemon = response.results;

    })
  }

  getFoto(pokemon : Pokemon){

    let id = pokemon.url.split("/").reverse()[1];
    debugger;

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getCapturar() {

    this.listPokemon;
  }

}
