import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
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


const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'add-client', component: AddClientComponent },
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
  { path: 'listprojections', component: ListprojectionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
