import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
usuario: string ="";
email: string ="";
sexo: string ="";
password: string ="";
  constructor() { }
  
  ngOnInit() {
  }
ionViewDidEnter(){
}
}
