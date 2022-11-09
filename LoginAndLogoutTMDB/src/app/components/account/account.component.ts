import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  authToken = '';
  sessionID: string | null = '';

  ngOnInit(): void {
    this.sessionID = localStorage.getItem('session_id');
  }

  requestToken() {
    this.accountService.createRequestToken().subscribe(respuesta => {
      if(respuesta.success) {
        this.authToken = respuesta.request_token;
        window.location.href=`https://www.themoviedb.org/authenticate/${this.authToken}?redirect_to=${environment.local}`
      }
    });
  }

}
