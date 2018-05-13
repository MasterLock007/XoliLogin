import { UsersserviceProvider } from './../../providers/usersservice/usersservice';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public auth: UsersserviceProvider) {

  }
  cerrarSesion(){
    this.auth.logout();
  }

}
