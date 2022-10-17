import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonDetailResponse } from '../interfaces/pokemon-detalles';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-response';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonDespregableService {

  constructor(private http: HttpClient) { }

  public pokemonList(): Observable<PokemonResponse>{

    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon/`);

  }

  public getPojemonDetalles(pokemon: Pokemon): Observable<PokemonDetailResponse>{

    let id = pokemon.url.split("/").reverse()[1];

    return this.http.get<PokemonDetailResponse>(`${API_BASE_URL}/pokemon/${id}`);
  }
}
