import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../../models/client.model";
import {ClientsService} from "../../../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmService} from "../../../services/film.service";
import {Film} from "../../../models/film.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-modifierfilm',
  templateUrl: './modifierfilm.component.html',
  styleUrls: ['./modifierfilm.component.css']
})
export class ModifierfilmComponent implements OnInit {
  filmForm!: FormGroup;
  filmId!: number;
  existingFilm!: Film;
  constructor(private formBuilder: FormBuilder,
              private filmService: FilmService,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmId = +params['id'];
      this.getFilmData();
    });
    this.initForm();
  }

  initForm(): void {
    this.filmForm = this.formBuilder.group({
      titre: ['', Validators.required],
      realisateur: ['', Validators.required],
      dateFilm: ['', Validators.required],
      genre: ['', Validators.required],
      cheminImage: ['', Validators.required]
    });
  }

  getFilmData(): void {
    this.filmService.getFilmById(this.filmId).subscribe({
      next: (film: Film) => {
        this.existingFilm = film;
        this.updateFormWithFilmData();
      },
      error: (error) => console.error("Erreur lors de la récupération du film:", error)
    });
  }

  updateFormWithFilmData(): void {
    this.filmForm.patchValue({
      titre: this.existingFilm.titre,
      realisateur: this.existingFilm.realisateur,
      // Assurez-vous que la date est formatée correctement pour le input de type datetime-local
      dateFilm: this.datePipe.transform(this.existingFilm.dateFilm, 'yyyy-MM-ddTHH:mm'),
      genre: this.existingFilm.genre,
      cheminImage: this.existingFilm.cheminImage
    });
  }

  onSubmit(): void {
    if (this.filmForm.valid) {
      this.filmService.updateFilm(this.filmId, this.filmForm.value).subscribe({
        next: () => {
          console.log("Film modifié avec succès.");
          this.router.navigate(['film/all']);
        },
        error: (error) => console.error('Erreur lors de la modification du film', error)
      });
    }
  }

}
