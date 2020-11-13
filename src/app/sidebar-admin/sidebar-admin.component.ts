import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/admin-layout/inicio',        title: 'Inicio',                     icon:'nc-spaceship',  class: '' },
    { path: '/admin-layout/disponibles',   title: 'Bicicletas Disponibles',     icon:'nc-spaceship',  class: '' },
    { path: '/admin-layout/prestamo',      title: 'Prestamo de Bicicletas',     icon:'nc-spaceship',  class: '' },
    { path: '/admin-layout/reporte',       title: 'Reporte de Bicicletas',      icon:'nc-spaceship',  class: '' },
    { path: '/admin-layout/foro',          title: 'Foro de Informacion',        icon:'nc-spaceship',  class: '' },
    { path: '/admin-layout/dashboard',     title: 'Dashboard',                  icon:'nc-bank',       class: '' },
    { path: '/admin-layout/icons',         title: 'Icons',                      icon:'nc-diamond',    class: '' },
    { path: '/admin-layout/maps',          title: 'Maps',                       icon:'nc-pin-3',      class: '' },
    { path: '/admin-layout/notifications', title: 'Notifications',              icon:'nc-bell-55',    class: '' },
    { path: '/admin-layout/user',          title: 'User Profile',               icon:'nc-single-02',  class: '' },
    { path: '/admin-layout/table',         title: 'Table List',                 icon:'nc-tile-56',    class: '' },
    { path: '/admin-layout/typography',    title: 'Typography',                 icon:'nc-caps-small', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebarAdmin-cmp',
    templateUrl: 'sidebar-admin.component.html',
})

export class SidebarAdminComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
