import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { AddutilisateurComponent } from './components/utilisateurs/addutilisateur/addutilisateur.component';
import { ListutilisateurComponent } from './components/utilisateurs/listutilisateur/listutilisateur.component';
import {AddplaceComponent} from "./components/places/addplace/addplace.component";
import {ListplacesComponent} from "./components/places/listplaces/listplaces.component";
import { ListsallesComponent } from './components/salles/listsalles/listsalles.component';
import { AddsallesComponent } from './components/salles/addsalles/addsalles.component';
import { AddfilmComponent } from './components/films/addfilm/addfilm.component';
import { ListfilmsComponent } from './components/films/listfilms/listfilms.component';
import { AddticketComponent } from './components/tickets/addticket/addticket.component';
import { ListticketsComponent } from './components/tickets/listtickets/listtickets.component';
import { AddprojectionComponent } from './components/projections/addprojection/addprojection.component';
import { ListprojectionsComponent } from './components/projections/listprojections/listprojections.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { ListclientsComponent } from './components/clients/listclients/listclients.component';
import {ModifierclientComponent} from "./components/clients/modifierclient/modifierclient.component";
import {ModifiersalleComponent} from "./components/salles/modifiersalle/modifiersalle.component";
import {ModifierfilmComponent} from "./components/films/modifierfilm/modifierfilm.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'listclients', component: ListclientsComponent },
  { path: 'addutilisateur', component: AddutilisateurComponent },
  { path: 'listutilisateurs', component: ListutilisateurComponent },
  { path: 'addplace', component: AddplaceComponent },
  { path: 'listplaces', component: ListplacesComponent },
  { path: 'addsalle', component: AddsallesComponent },
  { path: 'listsalles', component: ListsallesComponent },
  { path: 'addfilm', component: AddfilmComponent },
  { path: 'listfilms', component: ListfilmsComponent },
  { path: 'addticket', component: AddticketComponent },
  { path: 'listtickets', component: ListticketsComponent },
  { path: 'addprojection', component: AddprojectionComponent },
  { path: 'listprojections', component: ListprojectionsComponent },
  { path: 'addSupplier', component: AddClientComponent },
  { path: 'updateSupplier/:id', component: ModifierclientComponent },
  { path: 'supplier/all', component: ListclientsComponent },
  { path: 'addSalle', component: AddsallesComponent },
  { path: 'updateSalle/:id', component: ModifiersalleComponent },
  { path: 'salle/all', component: ListsallesComponent },
  { path: 'film/all', component: ListfilmsComponent },
  { path: 'addFilm', component: AddfilmComponent },
  { path: 'updateFilm/:id', component: ModifierfilmComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'projection/all', component: ListprojectionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
