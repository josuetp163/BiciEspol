import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Bicicleta } from '../models/bicicleta';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  bicicletas: AngularFireList<any>;
  selectedBicicleta: Bicicleta = new Bicicleta();

  constructor(private firebase: AngularFireDatabase ) {    
  }

  getBicicletas(): AngularFireList<any>{
    return this.bicicletas = this.firebase.list('/Bicicletas');
  }

  insertBicicleta(bicicleta: Bicicleta ){
    this.bicicletas.push({
      codigo: bicicleta.codigo,
      estado: bicicleta.estado,
      estacion: bicicleta.estacion
    });
  }

  updateBicicleta(bicicleta: Bicicleta){
    this.bicicletas.update(bicicleta.$key,{
      codigo: bicicleta.codigo,
      estado: bicicleta.estado,
      estacion: bicicleta.estacion
    });
  }

  eliminarBicicleta(bicicleta: Bicicleta){
    this.bicicletas.remove(bicicleta.$key);
  }


}
