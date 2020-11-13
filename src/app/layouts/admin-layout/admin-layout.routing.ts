import { Routes } from '@angular/router';

import { InicioComponent }             from '../../pages/inicio/inicio.component';
import { DisponiblesComponent }        from '../../pages/disponibles/disponibles.component';
import { PrestamoComponent }           from '../../pages/prestamo/prestamo.component';
import { ReporteComponent }            from '../../pages/reporte/reporte.component';
import { ForoComponent }               from '../../pages/foro/foro.component';
import { DashboardComponent }          from '../../pages/dashboard/dashboard.component';
import { UserComponent }               from '../../pages/user/user.component';
import { TableComponent }              from '../../pages/table/table.component';
import { TypographyComponent }         from '../../pages/typography/typography.component';
import { IconsComponent }              from '../../pages/icons/icons.component';
import { MapsComponent }               from '../../pages/maps/maps.component';
import { NotificationsComponent }      from '../../pages/notifications/notifications.component';
import { UpgradeComponent }            from '../../pages/upgrade/upgrade.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'inicio',         component: InicioComponent },
    { path: 'disponibles',    component: DisponiblesComponent },
    { path: 'prestamo',       component: PrestamoComponent },
    { path: 'reporte',        component: ReporteComponent },
    { path: 'foro',           component: ForoComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
