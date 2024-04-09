import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salle} from "../models/salle.model";
import {Film} from "../models/film.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'http://localhost:8088/api/films';
  constructor(private http:HttpClient) { }
  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.apiUrl}`);
  }

  createFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(`${this.apiUrl}`, film);
  }
  deleteFilm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getFilmById(idFilm: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${idFilm}`);
  }

  updateFilm(idFilm: number, film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.apiUrl}/${idFilm}`, film);
  }
}
