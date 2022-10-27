import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(){

    return this.http.get(`${environment.apiBaseUrl}/3/person/popular?api_key=e375f35a8ed2c4c685f14c49cc598088&language=en-US&page=1`)

  }
}
