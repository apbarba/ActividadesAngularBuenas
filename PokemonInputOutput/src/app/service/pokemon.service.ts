import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonResponse } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public pokemonList(): Observable<PokemonResponse>{

    return this.http.get<PokemonResponse>(`${environment.apiBaseUrl}/pokemon?limit=50`);

  }
}
