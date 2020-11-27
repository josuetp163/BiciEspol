import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/client-layout/inicio',        title: 'Inicio',                     icon:'nc-spaceship',  class: '' },
    { path: '/client-layout/disponibles',   title: 'Bicicletas Disponibles',     icon:'nc-spaceship',  class: '' },
    { path: '/client-layout/prestamo',      title: 'Prestamo de Bicicletas',     icon:'nc-spaceship',  class: '' },
    { path: '/client-layout/reporte',       title: 'Reporte de Bicicletas',      icon:'nc-spaceship',  class: 'reporte' },
    { path: '/client-layout/foro',          title: 'Foro de Informacion',        icon:'nc-spaceship',  class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
