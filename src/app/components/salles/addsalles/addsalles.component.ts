import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SalleService} from "../../../services/salle.service";


@Component({
  selector: 'app-addsalles',
  templateUrl: './addsalles.component.html',
  styleUrls: ['./addsalles.component.css']
})
export class AddsallesComponent implements OnInit {
  salleForm!: FormGroup;
  nameError: string | null = null;
  constructor(private formBuilder: FormBuilder,
              private salleService : SalleService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.salleForm = this.formBuilder.group({
      name: ['', Validators.required],
      nombrePlace: ['', Validators.required]
    });
  }
  onSubmit(): void {

    if(this.salleForm.valid){
      const formData = this.salleForm.value;
      this.salleService.createSalle(formData).subscribe(
        (response)=>{
          console.log("Donnees des salles envoyer avec success",response);
          this.router.navigate(['salle/all']);
        },
        (error)=>{
          console.error('Erreur lors de envoi des données au backend', error);
          if (error.status === 400) {
            this.nameError = 'Le nom du salle existe déjà. Veuillez en choisir un autre.';
          } else {
            this.nameError = 'Une erreur s\'est produite lors de l\'ajout salle.';
          }

        }
      )

    }
  }
}
