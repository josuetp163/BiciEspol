import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-adm-bicicletas',
  templateUrl: './adm-bicicletas.component.html',
  styleUrls: ['./adm-bicicletas.component.css']
})
export class AdmBicicletasComponent implements OnInit {

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
        this.bicicletas.push(info);
      })
    });
  }

}
