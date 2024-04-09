import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../../services/clients.service";
import {Router} from "@angular/router";
import {FilmService} from "../../../services/film.service";

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
 filmForm!: FormGroup;
  nameError: string | null = null;
  constructor(private formBuilder: FormBuilder,
              private filmService : FilmService,
              private router: Router) { }

  ngOnInit(): void {
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
  onSubmit(): void {

    if(this.filmForm.valid){
      const formData = this.filmForm.value;
      this.filmService.createFilm(formData).subscribe(
        (response)=>{
          console.log("Donnees des films envoyer avec success",response);
          this.router.navigate(['film/all']);
        },
        (error)=>{
          console.error('Erreur lors de envoi des données au backend', error);
          if (error.status === 400) {
            this.nameError = 'Le nom du film existe déjà. Veuillez en choisir un autre.';
          } else {
            this.nameError = 'Une erreur s\'est produite lors de l\'ajout film.';
          }

        }
      )

    }
  }
}
