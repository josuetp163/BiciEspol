import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  bicicletas: any[];

  constructor(
    public FirebaseService: FirebaseService,
    ) { }

  ngOnInit(): void {
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
    });
  }

}
