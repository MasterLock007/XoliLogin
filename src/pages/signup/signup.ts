import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider]
})
export class SignupPage {

  public email : string;
  public telefono : any;
  public password : any;
  public nombre : any;
  public apellidoPaterno : any;
  public apellidoMaterno : any;
  public ciudad : any;
  public estado : any;
  public pais : any;
  public tipoUsuario : any;
 


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public usersserviceProvider : UsersserviceProvider, 
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
      //
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  doSignup(){

    var   account = {
      nombre: this.nombre,
      apellidoPatero: this.apellidoPaterno || '',
      apellidoMaterno: this.apellidoMaterno || '',
      email: this.email,
      telefono: this.telefono || '',
      password: this.password,
      ciudad: this.ciudad || '',
      estado: this.estado || '',
      pais: this.pais || '',
      tipoUsuario: this.tipoUsuario || ''
      

    };
var that = this;

var loader = this.loadingCtrl.create({
      content: "Espere...",
      
    });
    loader.present();


  	this.usersserviceProvider.signupUserService(account).then(authData => {
  		//successful
  		loader.dismiss();
  		that.navCtrl.setRoot(HomePage);

  	}, error => {
loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      that.password = ""//empty the password field

  	});

    
  }

}
