import { Component, OnInit } from '@angular/core';
import {Projeection} from "../../../models/projeection.model";
import {Salle} from "../../../models/salle.model";
import {Film} from "../../../models/film.model";
import {ProjectionService} from "../../../services/projection.service";
import {SalleService} from "../../../services/salle.service";
import {FilmService} from "../../../services/film.service";

@Component({
  selector: 'app-listprojections',
  templateUrl: './listprojections.component.html',
  styleUrls: ['./listprojections.component.css']
})
export class ListprojectionsComponent implements OnInit {
  projections :Projeection[]=[]
  salles:Salle[]=[]
  films:Film[]=[]
  constructor(private projectionService:ProjectionService,
              private salleService:SalleService,
              private filmService:FilmService) { }

  ngOnInit(): void {
    this.getProjections();
  }

  getProjections(): void {
    this.projectionService.getAllProjection().subscribe(
      (projections: Projeection[]) => {
        this.projections = projections;

        for (let projection of this.projections) {
          if (projection.salleId) { // Vérifiez si salleId est défini
            this.salleService.getSalleById(projection.salleId).subscribe(
              (salle: Salle) => {
                this.salles.push(salle);

                this.filmService.getFilmById(projection.filmId).subscribe(
                  (film: Film) => {
                    this.films.push(film);

                    if (this.salles.length === this.projections.length &&
                      this.films.length === this.projections.length) {
                      // Toutes les salles et tous les films ont été récupérés
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              },
              (error) => {
                console.log(error);
              }
            );
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }



  confirmAndDelete(projection:Projeection): void {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce projection ?');

    if (confirmDelete) {
      this.deleteProjection(projection);
    }
  }
  deleteProjection(projection:Projeection){
    let index=this.projections.indexOf(projection);
    this.projectionService.deleteProjection(projection.id).subscribe(
      () => {
        console.log('projection supprime avec succes');
        this.projections.splice(index,1)
      },
      (error) => {
        console.error('Erreur lors de la suppression du projection', error);
      }
    )

  }

}
