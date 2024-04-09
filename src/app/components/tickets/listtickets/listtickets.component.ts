import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../../models/ticket.model";
import {TicketService} from "../../../services/ticket.service";
import {Salle} from "../../../models/salle.model";
import {Film} from "../../../models/film.model";
import {Client} from "../../../models/client.model";

@Component({
  selector: 'app-listtickets',
  templateUrl: './listtickets.component.html',
  styleUrls: ['./listtickets.component.css']
})
export class ListticketsComponent implements OnInit {

  tickets: Ticket[] = [];
  salle: Salle[] = [];
  films: Film[] = [];
  clients:Client[]=[]

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {

  }


}
