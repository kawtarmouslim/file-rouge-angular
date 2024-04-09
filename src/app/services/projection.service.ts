import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";
import {Projeection} from "../models/projeection.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {
  private apiUrl = 'http://localhost:8088/api/projections';
  constructor(private http:HttpClient) { }
  getAllProjection(): Observable<Projeection[]> {
    return this.http.get<Projeection[]>(`${this.apiUrl}`);
  }

  createProjection(projection: any): Observable<Projeection> {
    return this.http.post<Projeection>(`${this.apiUrl}`, projection);
  }
  deleteProjection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getProjectionById(idProjection: number): Observable<Projeection> {
    return this.http.get<Projeection>(`${this.apiUrl}/${idProjection}`);
  }

  updateProjection(idProjection: number, projeection: Projeection): Observable<Projeection> {
    return this.http.put<Projeection>(`${this.apiUrl}/${idProjection}`, projeection);
  }
}
