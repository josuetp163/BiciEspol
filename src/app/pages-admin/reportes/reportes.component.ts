import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Prestamo } from '../../models/prestamo';
import { Bicicleta } from '../../models/bicicleta';
import { Puente } from '../../models/puente';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  prestamos: Prestamo[] = []
  bicicletas: Bicicleta[] = []
  dtTrigger: Subject<any> = new Subject<any>()

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var filtro = document.getElementById("filtro");
    filtro.addEventListener("change",() => this.filtro());

    var prestamo: any;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      retrieve: true,
      paging: false
    };
    this.http.get(Puente.url + '/bicicletas/leerBicicleta')
      .subscribe(data => {
        this.bicicletas = (data as any);
      });
  }

  filtro(){
    this.prestamos = []
    let filtro = (<HTMLInputElement>document.getElementById("filtro")).value;
    var i: any;
    
    this.http.get(Puente.url + '/mongo/showReportes')
      .subscribe(data => {
        for( i in data){
          console.log(data[i])
          if(data[i].codigoBici == filtro){
            this.prestamos.push(data[i])
          }
        }
        this.dtTrigger.next();
      });
    
    let table = <HTMLInputElement>document.getElementById("table");
    table.setAttribute("style","display:table;");
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



}
