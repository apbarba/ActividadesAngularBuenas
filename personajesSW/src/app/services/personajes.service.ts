import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonajesResponse} from '../interfaces/personajes-response.interface';

const API_URL_PERSONAJES = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  constructor(private http: HttpClientModule) { }

  public personajeList() : Observable<PersonajesResponse>{

    return this.http.get<PersonajesResponse>(`${API_URL_PERSONAJES} /personajes`);
  }
}
