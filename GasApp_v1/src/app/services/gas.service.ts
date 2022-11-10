import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GasResponse } from '../interfaces/gas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GasService {

  constructor(private http: HttpClient) { }

  getGasolinera(): Observable<GasResponse>{
    
    return this.http.get<GasResponse>(`${environment.apiBaseUrl}/PreciosCarburantes/EstacionesTerrestres/`)
  }
}
