import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDtb } from '../dtb/createSession.dtb';
import { DeleteSessionDtb } from '../dtb/deleteSession.dtb';
import { AccountDetailsResponse } from '../interfaces/account.interfaces';
import { CreateSessionResponse } from '../interfaces/CreateSession.interfaces';
import { RequestResponse } from '../interfaces/RequestAccount.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<RequestResponse> {
    return this.http.get<RequestResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`);
  }

  createSession(token: CreateSessionDtb): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(`${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`, token);
  }

  getUserDetails(session: string | null): Observable<AccountDetailsResponse> {
    return this.http.get<AccountDetailsResponse>(`${environment.apiBaseUrl}/account?session_id=${session}&api_key=${environment.apiKey}`);
  }

  deleteSession(session: DeleteSessionDtb) {
    this.http.request('delete', `${environment.apiBaseUrl}/authentication/session?api_key=${environment.apiKey}`, {body: session});
  }
}
