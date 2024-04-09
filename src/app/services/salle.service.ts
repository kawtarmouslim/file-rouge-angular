import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salle} from "../models/salle.model";

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiUrl = 'http://localhost:8088/api/salles';
  constructor(private http:HttpClient) { }
  getAllSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${this.apiUrl}`);
  }

  createSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(`${this.apiUrl}`, salle);
  }
  deleteSalle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getSalleById(idSalle: number): Observable<Salle> {
    return this.http.get<Salle>(`${this.apiUrl}/${idSalle}`);
  }

  updateSalle(idSalle: number, salle: Salle): Observable<Salle> {
    return this.http.put<Salle>(`${this.apiUrl}/${idSalle}`, salle);
  }
}

