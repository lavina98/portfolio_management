import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  authenticated: boolean = false;

  constructor(private af:AngularFireAuth) {
      this.af.authState.subscribe(
      (auth) => {
        if(auth!=null){
          this.user = af.authState;
          this.authenticated = true;
        }
      })
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
  }

  logout() {
    this.af.auth.signOut();
    this.authenticated = false;
  }

  ngOnInit() {
  }

}
