import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AlertService} from './services/alert.service';
import {LoginService} from './services/login.service';
import {AuthGuard} from './services/auth-guard.service';
import {PageheaderComponent } from './layout/pageheader/pageheader.component';


//Dash board
import { DashboardDatatableComponent} from './dashboard/dashboard-datatable/dashboard-datatable.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';

//Info box
import { InfoboxComponent} from './infobox/infobox.component';

// Prime Face
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';

let Dashboard = [
  DashboardComponent,
  DashboardContentComponent,
  DashboardDatatableComponent
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PageheaderComponent,
    InfoboxComponent,
    ...Dashboard

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    PaginatorModule

  ],
  providers: [AlertService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
