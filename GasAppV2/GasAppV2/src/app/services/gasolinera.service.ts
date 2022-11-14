import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }

  getGasolineras():Observable<any>{
    let url = `${environment.API_BASE_URL}`;
    return this.http.get<any>(url);
  }
}
