import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

 
@Injectable()



export class UsersserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor(public http: Http) {

 this.fireAuth = firebase.auth();

  	 this.userProfile = firebase.database().ref('users');
  }


  loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }


  signupUserService(account: {}){

    
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
          //usuario logueado
          this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
            //usuario logueado y registrado
          this.userProfile.child(authenticatedUser.uid).set(
            account
          );
          });
        });

  }
//cerrar sesión
  logout(){
    this.fireAuth.signOut().then(()=>{
      // hemos salido
    })
}


}
