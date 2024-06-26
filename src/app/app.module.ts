import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { AddutilisateurComponent } from './components/utilisateurs/addutilisateur/addutilisateur.component';
import { ListutilisateurComponent } from './components/utilisateurs/listutilisateur/listutilisateur.component';
import { ListplacesComponent } from './components/places/listplaces/listplaces.component';
import { AddplaceComponent } from './components/places/addplace/addplace.component';
import { ListsallesComponent } from './components/salles/listsalles/listsalles.component';
import { AddsallesComponent } from './components/salles/addsalles/addsalles.component';
import { AddfilmComponent } from './components/films/addfilm/addfilm.component';
import { ListfilmsComponent } from './components/films/listfilms/listfilms.component';
import { AddticketComponent } from './components/tickets/addticket/addticket.component';
import { ListticketsComponent } from './components/tickets/listtickets/listtickets.component';
import { AddprojectionComponent } from './components/projections/addprojection/addprojection.component';
import { ListprojectionsComponent } from './components/projections/listprojections/listprojections.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AddClientComponent,
    AddutilisateurComponent,
    ListutilisateurComponent,
    ListplacesComponent,
    AddplaceComponent,
    ListsallesComponent,
    AddsallesComponent,
    AddfilmComponent,
    ListfilmsComponent,
    AddticketComponent,
    ListticketsComponent,
    AddprojectionComponent,
    ListprojectionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
