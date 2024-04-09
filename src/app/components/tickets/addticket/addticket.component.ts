import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/client.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Projeection} from "../../../models/projeection.model";
import {TicketService} from "../../../services/ticket.service";
import {ClientsService} from "../../../services/clients.service";
import {ProjectionService} from "../../../services/projection.service";
import {Ticket} from "../../../models/ticket.model";
import {Place} from "../../../models/place.model";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css']
})
export class AddticketComponent implements OnInit {
  ticketForm!: FormGroup;
  errorMessage: string = '';
  clients: Client[] = [];
  places: Place[] = [];
  projections: { dateProjection: any; salleNom: any; id: any; filmTitre: any }[] = [];


  constructor(private formBuilder: FormBuilder,
              private ticketService: TicketService,
              private clientServive:ClientsService,
              private placeService:PlaceService,
              private projectionService:ProjectionService) { }

  ngOnInit(): void {
    this.initForm()
    this.fetchClients();
    this.fetchProjections();
    this.fetchPlaces()
  }
  initForm(): void {
   this.ticketForm = this.formBuilder.group({
      clientId: [''],
      filmId: [''], // Add this line
      projectionId: [''],
      placeId: [''],
     salleId: ['']
   });
  }
  fetchClients(): void {
    // Appeler le service pour récupérer les clients depuis la base de données
    // Exemple :
    this.clientServive.getAllClients().subscribe((data: any[]) => {
     this.clients = data;
    });
  }
  fetchPlaces(): void {
    // Appeler le service pour récupérer les clients depuis la base de données
    // Exemple :
    this.placeService.getAllPlaces().subscribe((data: any[]) => {
      this.places = data;
    });
  }



  fetchProjections(): void {
    this.projectionService.getAllProjection().subscribe((data: any[]) => {
      // Mappez les données pour extraire les titres des films de chaque projection
      this.projections = data.map(projection => ({
        id: projection.id,
        dateProjection: projection.dateProjection,
        filmTitre: projection.film ? projection.film.titre : '', // Vérification si 'film' existe avant d'accéder à 'titre'
        salleNom: projection.salle ? projection.salle.name : '' // Vérification si 'salle' existe avant d'accéder à 'name'
      }));
    });
  }


  onSubmit(): void {
    if (this.ticketForm.invalid) {
      return;
    }

    const ticketData: Ticket = {
      id: 0, // Remplacez null par la valeur appropriée si nécessaire
      prix: 0, // Remplacez 0 par la valeur appropriée si nécessaire
      clientId: this.ticketForm.value.clientId,
      projectionId: this.ticketForm.value.projectionId,
      placeId: this.ticketForm.value.placeId
    };

    this.ticketService.creerTicket(ticketData).subscribe(
      (response) => {
        console.log('Ticket créé avec succès', response);
        // Réinitialiser le formulaire après la création du ticket
        this.ticketForm.reset();
      },
      (error) => {
        console.log('Erreur lors de la création du ticket', error);
        if (error.status === 400) {
          this.errorMessage = error.error.message; // Afficher le message d'erreur
        }
      }
    );
  }


}
