import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../models/ticket.model";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8088/api/tickets';
  constructor(private http:HttpClient) { }

  creerTicket(ticket: { projectionId: any; clientId: any }): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/add`, ticket);
  }
  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}`);
  }
}
