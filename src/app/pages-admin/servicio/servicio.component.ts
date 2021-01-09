import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ServicioComponent implements OnInit {
  bicicletas: any[];

  constructor(
    public FirebaseService: FirebaseService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    /*
    this.FirebaseService.getBicicletas().snapshotChanges()
    .subscribe(item =>{
      this.bicicletas = [];
      item.forEach(element =>{
        let info = element.payload.toJSON();
        info["$key"] = element.key;
        if( info["estado"] == "rota"){
          this.bicicletas.push(info);
        }
      })
    });*/
    this.http.get<any[]>("http://localhost:3000/bicicletas/leerBicicleta")
    .subscribe(item =>{
      this.bicicletas = [];
      item.forEach(element =>{
        //let info = element.payload.toJSON()
        if(element.estacion == 1){
          element.estacion = "Garita"
        }else if(element.estacion == 2){
          element.estacion = "Rectorado"
        }
        if(element.estado == "Defectuosa"){
          this.bicicletas.push(element);
        }
      })
    });
  }

}
