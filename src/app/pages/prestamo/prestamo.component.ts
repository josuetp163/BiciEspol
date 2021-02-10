import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  private scannerEnabled: boolean = true;
  private information: string = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  private bicicletaPrestada:string="";
  private date;


  constructor() { }

  ngOnInit(): void {
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.bicicletaPrestada = $event;
    this.date= this.dateFormat(new Date());

  /*TODO
  *Enviar informacion de bicicletaPrestada al backend (es la información
  * que leyó el scanner)
  */

  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  }

    //Tue Feb 09 2021 20:52:50 GMT-0500 (hora estándar de Colombia)

  private dateFormat(date: Date) {
    const day = date && date.getDate() || -1;
    const dayWithZero = day.toString().length > 1 ? day : "0" + day;
    const month = date && date.getMonth() + 1 || -1;
    const monthWithZero = month.toString().length > 1 ? month : "0" + month;
    const year = date && date.getFullYear() || -1;
    const hour= date && date.getHours() || -1;
    const minutes= date && date.getMinutes() || -1;
    const hourWithZero = hour.toString().length > 1 ? hour : "0" + hour;
    const minutesWithZero= minutes.toString().length > 1? minutes : "0" + minutes;

    
    return `${year}-${monthWithZero}-${dayWithZero} ${hourWithZero}-${minutesWithZero}`;
    }



}
