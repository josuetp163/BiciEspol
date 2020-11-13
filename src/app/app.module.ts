import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { SidebarAdminModule } from './sidebar-admin/sidebar-admin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    SidebarAdminModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
