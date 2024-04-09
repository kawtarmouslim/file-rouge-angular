import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/client.model";
import {Film} from "../../../models/film.model";
import {FilmService} from "../../../services/film.service";

@Component({
  selector: 'app-listfilms',
  templateUrl: './listfilms.component.html',
  styleUrls: ['./listfilms.component.css']
})
export class ListfilmsComponent implements OnInit {
  films: Film[] = [];
  constructor( private filmService:FilmService) { }

  ngOnInit(): void {
    this.getAllClients()
  }
  getAllClients() {
    this.filmService.getAllFilms().subscribe({
      next: (data) => {
        console.log(data); // Log the data to verify its structure
        this.films = data;

      },
      error: (error) => {
        console.error('error lors de la recuperationde la liste des films', error);
        if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
          // Handle the connection refused error specifically
          console.error('Connection refused. Please check the server status.');
          // Optionally, show a user-friendly message or redirect the user
        }
      }
    });
  }



  confirmAndDelete(film:Film): void {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce film ?');

    if (confirmDelete) {
      this.deleteFilm(film);
    }
  }

  deleteFilm(film:Film){
    let index=this.films.indexOf(film);
    this.filmService.deleteFilm(film.id).subscribe(
      () => {
        console.log('Film supprime avec succes');
        this.films.splice(index,1)
      },
      (error) => {
        console.error('Erreur lors de la suppression du film', error);
      }
    )

  }

}
