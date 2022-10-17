import { Injectable } from '@angular/core';
import { FilmsResponse} from '../interfaces/personajes-response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL_PERSONAJES = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  constructor(private http: HttpClient) { } //En el private no se declara el HttpClientModule, ya que importará errores en el get

  public personajeList() : Observable<FilmsResponse>{

    return this.http.get<FilmsResponse>(`${API_URL_PERSONAJES} /films/`);
  }

  public peliculasList(url: string): Observable<FilmsResponse>{

    return this.http.get<FilmsResponse>(`${url}`);

  }
}
