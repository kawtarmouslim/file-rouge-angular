import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Place} from "../models/place.model";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private apiUrl = 'http://localhost:8088/api/places';
  constructor(private http:HttpClient) { }
  createPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(`${this.apiUrl}`, place);
  }
  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiUrl}`);
  }
}
