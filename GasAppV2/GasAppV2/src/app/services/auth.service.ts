import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/user.interface';

const COLLECTION_USERS = 'users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, public auth: AngularFireAuth, private firestore: AngularFirestore,
    private router: Router) { }

  isLoggedIn(): boolean {
    return localStorage.getItem('uid') != null;
  }
  login(){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => {
    this.firestore.collection(COLLECTION_USERS).doc(resp?.user?.uid)
    .set({ name: resp.user?.displayName,
      email: resp.user?.email,
      photo: resp.user?.photoURL,
      uid: resp.user?.uid });
    localStorage.setItem('name', resp.user?.displayName? resp.user?.displayName: '');
    localStorage.setItem('photo', resp.user?.photoURL? resp.user?.photoURL: '');
    localStorage.setItem('uid', resp.user?.uid? resp.user?.uid: '');
    this.router.navigate(['/gasolineras']);
  });
  }

  logout(){
    this.auth.signOut().then(resp => {
      this.router.navigate(['login'])
    });
    /* localStorage.removeItem('session_id');
    localStorage.removeItem('request_token');
    localStorage.removeItem('name');
    localStorage.removeItem('photo');
    localStorage.removeItem('uid'); */
    localStorage.clear();
  }

}
