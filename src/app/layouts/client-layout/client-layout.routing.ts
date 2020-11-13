import { Routes } from '@angular/router';

import { InicioComponent }          from '../../pages/inicio/inicio.component';
import { DisponiblesComponent }     from '../../pages/disponibles/disponibles.component';
import { PrestamoComponent }        from '../../pages/prestamo/prestamo.component';
import { ReporteComponent }         from '../../pages/reporte/reporte.component';
import { ForoComponent }            from '../../pages/foro/foro.component';


export const ClientLayoutRoutes: Routes = [
    { path: 'inicio',         component: InicioComponent },
    { path: 'disponibles',    component: DisponiblesComponent },
    { path: 'prestamo',       component: PrestamoComponent },
    { path: 'reporte',        component: ReporteComponent },
    { path: 'foro',           component: ForoComponent },
];
