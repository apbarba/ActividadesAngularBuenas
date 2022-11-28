import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon!: Pokemon
  @Output() pokemonEvent = new EventEmitter<Pokemon>()

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {}

  getSelectPokemon(){

    this.pokemonEvent.emit(this.pokemon);
  }

  getImg(url: string){

    let id = url.split("/").reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`;
  }


}
