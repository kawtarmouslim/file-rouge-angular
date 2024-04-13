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
import {Router} from "@angular/router";
import {Salle} from "../../../models/salle.model";
import {Film} from "../../../models/film.model";
import {SalleService} from "../../../services/salle.service";
import {FilmService} from "../../../services/film.service";

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


    this.initForm();
  }

  initForm(): void {
    this.ticketForm = this.formBuilder.group({
      client: ['', Validators.required],
      // projection: ['', Validators.required],
      place: ['', Validators.required],
      salle: ['', Validators.required],
      film: ['', Validators.required]
    });
  }


  onSubmit(): void {
  }

}
