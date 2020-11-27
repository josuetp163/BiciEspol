import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../services/firebase.service';
import { NgForm } from '@angular/forms';
import { Bicicleta } from '../../models/bicicleta';

@Component({
  selector: 'app-aq-bicicletas',
  templateUrl: './aq-bicicletas.component.html',
  styleUrls: ['./aq-bicicletas.component.css']
})
export class AqBicicletasComponent implements OnInit{
  
  bicicletas: any[];

  constructor(private FirebaseService: FirebaseService ){ }
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
  }
  resetForm(bicicletaForm: NgForm){
    if(bicicletaForm != null){
      bicicletaForm.reset();
      this.FirebaseService.selectedBicicleta = new Bicicleta();
    }
  }
}
