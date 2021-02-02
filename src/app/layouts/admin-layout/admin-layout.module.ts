import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { InicioAdminComponent }        from '../../pages-admin/inicio-admin/inicio-admin.component';
import { AqBicicletasComponent }          from '../../pages-admin/aq-bicicletas/aq-bicicletas.component';
import { AdmBicicletasComponent }               from '../../pages-admin/adm-bicicletas/adm-bicicletas.component';
import { ServicioComponent }              from '../../pages-admin/servicio/servicio.component';
import { AdmForoComponent }         from '../../pages-admin/adm-foro/adm-foro.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmEstadisticaComponent } from 'app/pages-admin/adm-estadistica/adm-estadistica.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    InicioAdminComponent,
    AqBicicletasComponent,
    AdmBicicletasComponent,
    ServicioComponent,
    AdmForoComponent,
    AdmEstadisticaComponent,
    

  ]
})

export class AdminLayoutModule {}
