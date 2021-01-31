import { Routes } from '@angular/router';

import { InicioAdminComponent }        from '../../pages-admin/inicio-admin/inicio-admin.component';
import { AqBicicletasComponent }       from '../../pages-admin/aq-bicicletas/aq-bicicletas.component';
import { AdmBicicletasComponent }      from '../../pages-admin/adm-bicicletas/adm-bicicletas.component';
import { ServicioComponent }           from '../../pages-admin/servicio/servicio.component';
import { AdmForoComponent }            from '../../pages-admin/adm-foro/adm-foro.component';
import { IconsComponent }              from '../../pages/icons/icons.component';
import { MapsComponent }               from '../../pages/maps/maps.component';
import { NotificationsComponent }      from '../../pages/notifications/notifications.component';
import { UpgradeComponent }            from '../../pages/upgrade/upgrade.component';
import { AdmEstadisticaComponent}      from "../../pages-admin/adm-estadistica/adm-estadistica.component";


export const AdminLayoutRoutes: Routes = [
    { path: 'inicio-admin',   component: InicioAdminComponent},         
    { path: 'aq-bicicletas',  component: AqBicicletasComponent },
    { path: 'adm-bicicletas', component: AdmBicicletasComponent },
    { path: 'servicio',       component: ServicioComponent },
    { path: 'adm-foro',       component: AdmForoComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'adm-estadistica',component: AdmEstadisticaComponent }
];
