import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/admin-layout/inicio-admin', title: 'Inicio', icon: 'nc-bank', class: '' },
    { path: '/admin-layout/aq-bicicletas', title: 'Añadir Bicicletas', icon: 'nc-simple-add', class: '' },
    { path: '/admin-layout/adm-bicicletas', title: 'Administrar Bicicletas', icon: 'nc-briefcase-24', class: '' },
    { path: '/admin-layout/servicio', title: 'Fuera de servicio', icon: 'nc-settings', class: '' },
    { path: '/admin-layout/adm-foro', title: 'Administrar Foro de Informacion', icon: 'nc-paper', class: '' },
    { path: '/admin-layout/adm-estadistica', title: 'Estadísticas', icon: 'nc-paper', class: '' }
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
