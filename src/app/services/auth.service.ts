import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string;
  pass: string;

  constructor(private AngularFireAuth: AngularFireAuth) { }
  
  loginEmailUser(){
    this.AngularFireAuth.signInWithEmailAndPassword(this.email,this.pass)
    .catch(()=>{
      console.log("error")
    })
    console.log("sign in")
  }
}
