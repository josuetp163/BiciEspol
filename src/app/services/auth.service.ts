import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string;
  pass: string;
  state: boolean;
  constructor(private AngularFireAuth: AngularFireAuth) {
  }
  loginEmailUser(){
    return new Promise((resolve,reject)=>{
      this.AngularFireAuth.signInWithEmailAndPassword(this.email,this.pass)
      .then(user => resolve(user),
      err => reject(err))
    });
  }
}
