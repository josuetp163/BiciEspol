import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { Bicicleta } from '../../models/bicicleta';
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Puente } from '../../models/puente';

@Component({
  selector: 'app-aq-bicicletas',
  templateUrl: './aq-bicicletas.component.html',
  styleUrls: ['./aq-bicicletas.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AqBicicletasComponent implements OnInit{
  
  bicicleta = new Bicicleta();

  constructor(
    public FirebaseService: FirebaseService,
    private ToastrService: ToastrService,
    private http: HttpClient
    ){}

  showNotification(){
    this.ToastrService.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Bicicleta Agregada Correctamente</span>',
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
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Error al añadir la bicicleta</span>',
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

  ngOnInit(){
    /*this.FirebaseService.getBicicletas().snapshotChanges()
    .subscribe(item =>{
      this.bicicletas = [];
      item.forEach(element =>{
        let info = element.payload.toJSON();
        info["$key"] = element.key;
        this.bicicletas.push(info);
      })
    });*/
  }

  onSubmit(bicicletaForm: NgForm){
    this.http.post(Puente.url + "/bicicletas/ingresarBicicleta",this.bicicleta).subscribe(
      data => {
        console.log(data)
        this.showNotification();
      },
      err => {
        console.log(err)
        this.showNotificationErr();
      }
    )
    /*
    this.FirebaseService.insertBicicleta(bicicletaForm.value);
    this.resetForm(bicicletaForm);
    this.showNotification();*/
  }
  /*
  resetForm(bicicletaForm: NgForm){
    if(bicicletaForm != null){
      bicicletaForm.reset();
      this.FirebaseService.selectedBicicleta = new Bicicleta();
    }
  }*/
}
