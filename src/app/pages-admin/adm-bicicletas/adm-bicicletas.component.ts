import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import {FirebaseService} from '../../services/firebase.service';
import { Bicicleta } from '../../models/bicicleta';
import { Puente } from '../../models/puente';
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
  title = 'app';
  elementType = 'url';
  value = this.bicicleta.idBicicleta;

  constructor(
    public FirebaseService: FirebaseService,
    private http: HttpClient,
    private ToastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.http.get<any[]>( Puente.url + "/bicicletas/leerBicicleta")
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
    this.http.post(Puente.url + "/bicicletas/eliminarBicicleta",bici)
    .subscribe(data => {
      let res: any = data;
      this.showNotification();
      this.ngOnInit();
    },
    err => {
      console.log(err);
      this.showNotificationErr();
      this.ngOnInit();
    })
  }

  actualizarBicicleta(): void{
    this.http.post(Puente.url + "/bicicletas/actualizarBicicleta",this.bicicleta)
    .subscribe(data => {
      let res: any = data;
      this.showNotification();
      this.ngOnInit();
    },
    err => {
      this.showNotificationErr();
      this.ngOnInit();
    })
  }

  seleccionarBicicleta(bici): void{
    if(bici.estacion == "Garita"){
      this.bicicleta.estacion = "1"
    }else if(bici.estacion == "Rectorado"){
      this.bicicleta.estacion = "2"
    }
    this.bicicleta.idBicicleta = bici.idBicicleta;
    this.bicicleta.estado = bici.estado;
  }

  showNotification(){
    this.ToastrService.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Operacion realizada con exito</span>',
      "",
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: "toast-top-right"
      }
    );
  }

  
  showNotificationErr(){
    this.ToastrService.error(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Error al realizar la operacion</span>',
      "",
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-top-center"
      }
    );
  }

}
