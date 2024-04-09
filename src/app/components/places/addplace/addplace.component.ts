import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../../services/clients.service";
import {Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css']
})
export class AddplaceComponent implements OnInit {

  placeForm!: FormGroup;
  nameError: string | null = null;
  constructor(private formBuilder: FormBuilder,
              private placeService : PlaceService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.placeForm = this.formBuilder.group({
      numero: ['', Validators.required],
      rangee: ['', Validators.required],
      estReservee: ['', Validators.required]
    });
  }
  onSubmit(): void {

    if(this.placeForm.valid){
      const formData = this.placeForm.value;
      this.placeService.createPlace(formData).subscribe(
        (response)=>{
          console.log("Donnees des places envoyer avec success",response);
          this.router.navigate(['place/all']);
        },
        (error)=>{
          console.error('Erreur lors de envoi des données au backend', error);
          if (error.status === 400) {
            this.nameError = 'Le nom du place existe déjà. Veuillez en choisir un autre.';
          } else {
            this.nameError = 'Une erreur s\'est produite lors de l\'ajout place.';
          }

        }
      )

    }
  }

}
