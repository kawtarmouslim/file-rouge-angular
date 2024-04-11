import { Component, OnInit } from '@angular/core';
import {Salle} from "../../../models/salle.model";
import {Film} from "../../../models/film.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectionService} from "../../../services/projection.service";
import {SalleService} from "../../../services/salle.service";
import {FilmService} from "../../../services/film.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Projeection} from "../../../models/projeection.model";

@Component({
  selector: 'app-addprojection',
  templateUrl: './addprojection.component.html',
  styleUrls: ['./addprojection.component.css']
})
export class AddprojectionComponent implements OnInit {
  salles : Salle[]=[]
  films : Film[]=[]
  projectionForm!: FormGroup
  errorMessage: string = '';

  constructor( private formBuilder: FormBuilder,
               private salleService : SalleService ,
               private filmService:FilmService,
               private projectionService : ProjectionService,
               private router : Router,
               private datePipe: DatePipe,
               ) { }

  ngOnInit(): void {
    this.salleService.getAllSalles().subscribe(
      data => {
        this.salles = data;
      },
      error => {
        console.log(error);
      }
    )
    this.filmService.getAllFilms().subscribe(
      data => {
        this.films = data;
      },
      error => {
        console.log(error);
      }
    )

    this.initForm();
  }
  initForm(): void {
    this.projectionForm = this.formBuilder.group({
      dateProjection: ['', Validators.required],
      prix: ["", Validators.required],
      salle: ['', Validators.required],
      film: ['', Validators.required]


    });

  }

  onSubmit() {
    if (this.projectionForm.valid) {
      const formData = this.projectionForm.value;
      const dateProjectionValue = this.datePipe.transform(formData.dateProjection, 'yyyy-MM-ddTHH:mm:ss');
      const salleIdValue = formData.salle;
      const filmIdValue = formData.film;

      // Fetch the full salle and film objects based on the IDs
      this.salleService.getSalleById(salleIdValue).subscribe(salle => {
        this.filmService.getFilmById(filmIdValue).subscribe(film => {
          const projectionData = {
            dateProjection: dateProjectionValue,
            prix: formData.prix,
            salle: salle, // Use the full salle object
            film: film // Use the full film object
          };

          this.projectionService.createProjection(projectionData).subscribe(
            (response) => {
              console.log("Données de projection créées avec succès", response);
              this.router.navigate(['projection/all']);
            },
            (error) => {
              console.error("Erreur lors de la création de la projection", error);
              if (error.status === 400) {
                const errorMessage = error.error.message;
                console.error("Message d'erreur :", errorMessage);
                this.errorMessage = errorMessage;
              }
            }
          );
        });
      });
    } else {
      console.error("Le formulaire n'est pas valide.");
    }
  }




}
