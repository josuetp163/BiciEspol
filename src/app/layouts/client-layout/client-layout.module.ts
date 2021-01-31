import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientLayoutRoutes } from './client-layout.routing';

import { InicioComponent }          from '../../pages/inicio/inicio.component';
import { DisponiblesComponent }     from '../../pages/disponibles/disponibles.component';
import { PrestamoComponent }        from '../../pages/prestamo/prestamo.component';
import { ReporteComponent }         from '../../pages/reporte/reporte.component';
import { ForoComponent }            from '../../pages/foro/foro.component';
import { ContactoComponent }            from '../../pages/contacto/contacto.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    InicioComponent,
    DisponiblesComponent,
    PrestamoComponent,
    ReporteComponent,
    ForoComponent,
    ContactoComponent,
  ]
})

export class ClientLayoutModule {}
