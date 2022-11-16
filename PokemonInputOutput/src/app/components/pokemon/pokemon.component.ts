import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {

    this.pokemonServices.pokemonList().subscribe((resp) => {

      this.pokemonList = resp.results

    })  }

  getImg(url: string){

    let id = url.split("/").reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`;
  }

  }
