import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { Bicicleta } from '../../models/bicicleta';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-aq-bicicletas',
  templateUrl: './aq-bicicletas.component.html',
  styleUrls: ['./aq-bicicletas.component.css']
})
export class AqBicicletasComponent implements OnInit{
  
  bicicletas: any[];

  constructor(
    public FirebaseService: FirebaseService,
    private toastr: ToastrService
    ){}

  showNotification(){
    this.toastr.success(
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

  ngOnInit(){
    this.FirebaseService.getBicicletas().snapshotChanges()
    .subscribe(item =>{
      this.bicicletas = [];
      item.forEach(element =>{
        let info = element.payload.toJSON();
        info["$key"] = element.key;
        this.bicicletas.push(info);
      })
    });
  }

  onSubmit(bicicletaForm: NgForm){
    this.FirebaseService.insertBicicleta(bicicletaForm.value);
    this.resetForm(bicicletaForm);
    this.showNotification();
  }
  resetForm(bicicletaForm: NgForm){
    if(bicicletaForm != null){
      bicicletaForm.reset();
      this.FirebaseService.selectedBicicleta = new Bicicleta();
    }
  }
}
