import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../../models/ticket.model";
import {TicketService} from "../../../services/ticket.service";
import {Salle} from "../../../models/salle.model";
import {Film} from "../../../models/film.model";
import {Client} from "../../../models/client.model";
import {Projeection} from "../../../models/projeection.model";

@Component({
  selector: 'app-listtickets',
  templateUrl: './listtickets.component.html',
  styleUrls: ['./listtickets.component.css']
})
export class ListticketsComponent implements OnInit {

  tickets: Ticket[] = [];


  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getTickets()

  }
  getTickets(): void {
    this.ticketService.getAllTickets().subscribe(
      (tickets: Ticket[]) => {
        console.log(tickets)
        this.tickets = tickets;

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
