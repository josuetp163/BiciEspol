import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Puente } from '../../models/puente';
import { Bicicleta } from '../../models/bicicleta';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class DisponiblesComponent implements OnInit {
  garita = 0;
  rectorado = 0;
  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>( Puente.url + "/bicicletas/leerBicicleta")
    .subscribe(item =>{
      item.forEach(element =>{
        if(element.estacion == 1){
          this.garita += 1;
        }else if(element.estacion == 2){
          this.rectorado += 1;
        }
      })
    });
  }

}
