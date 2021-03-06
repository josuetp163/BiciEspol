import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Puente } from '../../models/puente';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ContactoComponent implements OnInit {
  mail = {
    nombre: "",
    email: "",
    mensaje: "",
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  onSubmit(bicicletaForm: NgForm){
    this.http.post( Puente.url + "/mail",this.mail).subscribe(
      data => {
        let res: any = data;
        console.log("Enviado con exito")
      },
      err => {
        console.log(err)
      }
    )
  }
}
