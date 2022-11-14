import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provincia } from '../models/interfaces/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { }

  getAllProvincias():Observable<Provincia[]>{
    let url = `${environment.API_BASE_UR_PROVINCIA}`
    return this.http.get<Provincia[]>(url);
  }
}
