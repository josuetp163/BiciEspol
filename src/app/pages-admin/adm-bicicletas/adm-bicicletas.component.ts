import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '../../services/firebase.service';
import { Bicicleta } from '../../models/bicicleta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-adm-bicicletas',
  templateUrl: './adm-bicicletas.component.html',
  styleUrls: ['./adm-bicicletas.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AdmBicicletasComponent implements OnInit {

  bicicletas: any[];
  bicicleta = new Bicicleta();

  constructor(
    public FirebaseService: FirebaseService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/bicicletas/leerBicicleta")
    .subscribe(item =>{
      this.bicicletas = [];
      item.forEach(element =>{
        if(element.estacion == 1){
          element.estacion = "Garita"
        }else if(element.estacion == 2){
          element.estacion = "Rectorado"
        }
        this.bicicletas.push(element);
      })
    });
  }

  eliminarBicicleta(bici): void{
    this.http.post("http://localhost:3000/bicicletas/eliminarBicicleta",bici)
    .subscribe(data => {
      let res: any = data;
      console.log("Enviado con exito")
    },
    err => {
      console.log(err)
    })
  }

  actualizarBicicleta(): void{
    this.http.post("http://localhost:3000/bicicletas/eliminarBicicleta",this.bicicleta)
    .subscribe(data => {
      let res: any = data;
      console.log("Enviado con exito")
    },
    err => {
      this.ngOnInit();
      console.log(err)
    })
  }

  seleccionarBicicleta(bici): void{
    if(bici.estacion == "Garita"){
      this.bicicleta.estacion = "1"
    }else if(bici.estacion == "Rectorado"){
      this.bicicleta.estacion = "2"
    }
    this.bicicleta.id = bici.idBicicleta;
    this.bicicleta.estado = bici.estado;
  }

}
