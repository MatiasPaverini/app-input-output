import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public firebase: AngularFireAuth) {

   }


  public register(email: string, password: string) {
    return this.firebase.CreateUserWithEmailAndPassword(email, password);
  }

  public login(email: string, password:string) {
    return this.firebase.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    return this.firebase.signOut();
  }

}
