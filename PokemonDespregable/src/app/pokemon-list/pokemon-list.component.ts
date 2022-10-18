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

  pokemon?: Pokemon;
  listPokemon: Pokemon[] = [];
  pokemonSelec: PokemonDetailResponse | undefined;

  constructor(private pokemonService: PokemonDespregableService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {

      this.listPokemon = response.results;

    })
  }

  getFoto(url: string) {

    if(url ==''){

      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/151.png';

    }else{


    let id = url.split("/").reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`;
  }

}


  getCapturar(pokemon: Pokemon) {

    this.pokemon = pokemon;

    return this.pokemon;
  }

}
