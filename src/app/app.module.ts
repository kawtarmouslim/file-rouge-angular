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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

import { ListclientsComponent } from './components/clients/listclients/listclients.component';
import { ModifierclientComponent } from './components/clients/modifierclient/modifierclient.component';
import { ModifiersalleComponent } from './components/salles/modifiersalle/modifiersalle.component';
import { ModifierfilmComponent } from './components/films/modifierfilm/modifierfilm.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {AuthInterceptorServiceService} from "./services/auth-interceptor-service.service";
import { ModificationprojectionComponent } from './components/projections/modificationprojection/modificationprojection.component';
import { ModificationplaceComponent } from './components/places/modificationplace/modificationplace.component';
import { ModificationticketComponent } from './components/tickets/modificationticket/modificationticket.component';



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
    ListclientsComponent,
    ModifierclientComponent,
    ModifiersalleComponent,
    ModifierfilmComponent,
    AuthenticationComponent,
    ModificationprojectionComponent,
    ModificationplaceComponent,
    ModificationticketComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe,{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorServiceService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
