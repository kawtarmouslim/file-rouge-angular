import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/client.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Projeection} from "../../../models/projeection.model";
import {TicketService} from "../../../services/ticket.service";
import {ClientsService} from "../../../services/clients.service";
import {ProjectionService} from "../../../services/projection.service";
;
import {Place} from "../../../models/place.model";
import {PlaceService} from "../../../services/place.service";
import {Router} from "@angular/router";
import {Salle} from "../../../models/salle.model";
import {Film} from "../../../models/film.model";
import {SalleService} from "../../../services/salle.service";
import {FilmService} from "../../../services/film.service";
import {Ticket} from "../../../models/ticket.model";

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
  salles: Salle[] = [];
  film: Film[] = [];
  projections: Projeection[] = [];


  constructor(private formBuilder: FormBuilder,
              private ticketService: TicketService,
              private clientServive: ClientsService,
              private placeService: PlaceService,
              private router: Router,
              private projectionService: ProjectionService,
              private salleService: SalleService,
              private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.clientServive.getAllClients().subscribe(
      data => {
        this.clients = data;
      },
      error => {
        console.log(error);
      }
    )
    this.placeService.getAllPlaces().subscribe(
      data => {
        this.places = data;
      },
      error => {
        console.log(error);
      }
    )
    this.salleService.getAllSalles().subscribe(
      data => {
        this.salles = data;
      },
      error => {
        console.log(error);
      }
    )
    this.filmService.getAllFilms().subscribe(
      data => {
        this.film = data;
      },
      error => {
        console.log(error);
      }
    )
    this.projectionService.getAllProjection().subscribe(
      data => {
        this.projections = data;
      },
      error => {
        console.log(error);
      }
    )


    this.initForm();
  }

  initForm(): void {
    this.ticketForm = this.formBuilder.group({
      client: ['', Validators.required],
      projection: ['', Validators.required],
      place: ['', Validators.required],
      salle: ['', Validators.required],
      film: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.ticketForm.value); // Ajoutez cette ligne pour voir les valeurs du formulaire dans la console

    if (this.ticketForm.valid) {
      const formData = this.ticketForm.value;
      const clientIdValue = formData.client;
      const placeIdValue = formData.place; // Correction ici
      const projectionIdValue = formData.projection; // Correction ici
      const salleIdValue = formData.salle;
      const filmIdValue = formData.film;

      this.clientServive.getClientById(clientIdValue).subscribe(client => { // Correction du nom de la méthode
        this.placeService.getPlaceById(placeIdValue).subscribe(place => { // Correction du nom de la méthode
          this.projectionService.getProjectionById(projectionIdValue).subscribe(projection => { // Correction du nom de la méthode
            this.salleService.getSalleById(salleIdValue).subscribe(salle => {
              this.filmService.getFilmById(filmIdValue).subscribe(film => {
                const ticketData = {

                  client: client,
                  place: place,
                  projection: projection,
                  salle: salle,
                  film: film
                };

                this.ticketService.createTicket(<Ticket>ticketData).subscribe(
                  (response) => {
                    console.log(ticketData)
                    console.log("Ticket créé avec succès", response);
                    this.router.navigate(['/ticket/all']); // Redirige vers la liste des tickets après création
                  },
                  (error) => {
                    console.error("Erreur lors de la création du ticket", error);
                    if (error.status === 400) {
                      const errorMessage = error.error.message;
                      console.error("Message d'erreur :", errorMessage);
                      this.errorMessage = errorMessage;
                    }
                  }
                );
              });
            });
          });
        });
      });
    } else {
      console.error("Le formulaire n'est pas valide.");
    }
  }





}
