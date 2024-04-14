import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../models/ticket.model";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";
import {Projeection} from "../models/projeection.model";
import {Place} from "../models/place.model";
import {Salle} from "../models/salle.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8088/api/tickets';
  constructor(private http:HttpClient) { }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/add`, ticket);
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}`);
  }
}
