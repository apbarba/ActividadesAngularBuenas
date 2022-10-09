import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilmsResponse} from '../interfaces/personajes-response.interface';
import { Observable } from 'rxjs';

const API_URL_PERSONAJES = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  constructor(private http: HttpClientModule) { }

  public personajeList() : Observable<FilmsResponse>{

    return this.http.get<FilmsResponse>(`${API_URL_PERSONAJES} /films/`);
  }

  public peliculasList(url: string): Observable<FilmsResponse>{

    return this.http.get<FilmsResponse>(`${url}`);

  }
}
