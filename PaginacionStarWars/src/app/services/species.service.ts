import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesResponse } from 'src/app/interfaces/species.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }


  getSpecies(page: number): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(`${environment.apiBaseUrl}/species?page=${page}`);
  }
}
