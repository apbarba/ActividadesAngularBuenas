import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeopleDetailsResponse } from '../interfaces/people-details.interfaces';
import { People, PeopleResponse } from '../interfaces/people.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople():Observable<PeopleResponse>{ //Ojo!

    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}`)

  }

  getPeopleDetails(people: People): Observable<PeopleDetailsResponse>{

    let id = people.id;

    return this.http.get<PeopleDetailsResponse>(`${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}`)
  }
}
