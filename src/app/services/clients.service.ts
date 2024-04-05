import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'http://localhost:8088/api/clients';
  constructor(private http:HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}`, client);
  }
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getClientById(idClient: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${idClient}`);
  }

  updateClient(idClient: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${idClient}`, client);
  }

}
