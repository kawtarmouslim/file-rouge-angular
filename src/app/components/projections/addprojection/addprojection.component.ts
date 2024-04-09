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
      prix: [1, [Validators.required, Validators.min(1)]],
      salleId: [null, Validators.required],
      filmId: [null, Validators.required]


    });

  }

  onSubmit(){
    const formData = this.projectionForm.value;
    const dateProjectionValue = this.datePipe.transform(formData.dateProjection, 'yyyy-MM-ddTHH:mm:ss');
    const salleIdValue = parseInt(formData.salleId);
    const filmIdValue = parseInt(formData.salleId);
    console.log(dateProjectionValue, salleIdValue,filmIdValue);

    const modifiedFormData = {
      dateProjection: dateProjectionValue,
      prix: formData.prix,
      salleId: salleIdValue,
      filmId: filmIdValue


    };
    this.projectionService.createProjection(modifiedFormData).subscribe(
      (response) => {
        console.log("Données du projection envoyées avec succès", response);
        this.router.navigate(['projection/all']);
      },
      (error) => {
        console.log(error.message);
        if (error.status === 400) {
          const errorMessage = error.error.message;
          console.log("Message d'erreur :", errorMessage);

          this.errorMessage = errorMessage;}
      }
    );

  }



}
