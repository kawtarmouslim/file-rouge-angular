import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../../models/client.model";
import {Salle} from "../../../models/salle.model";
import {ClientsService} from "../../../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleService} from "../../../services/salle.service";

@Component({
  selector: 'app-modifiersalle',
  templateUrl: './modifiersalle.component.html',
  styleUrls: ['./modifiersalle.component.css']
})
export class ModifiersalleComponent implements OnInit {
  salleForm!: FormGroup;
  nameError: string | null = null;
  existingSalle!: Salle;
  salleId!: number;
  constructor(private formBuilder: FormBuilder,
              private salleService: SalleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();


    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam) {
        this.salleId = +idParam; // Convertit l'ID en nombre
        this.getSalleData();
      }
    });
  }
  getSalleData(): void {
    this.salleService.getSalleById(this.salleId!).subscribe(
      (salle: Salle) => {
        this.existingSalle = salle;
        this.updateForm();
      },
      error => {
        console.error("Erreur lors de la récupération du salle :", error);
      }
    );
  }
  initForm(): void {
    this.salleForm = this.formBuilder.group({
      name: ['', Validators.required],
      nombrePlace: ['', Validators.required]
    });
  }

  updateForm(): void {
    if (this.existingSalle) {
      this.salleForm.patchValue({
        name: this.existingSalle.name,
        nombrePlace: this.existingSalle.nombrePlace
      });
    }
  }
  onSubmit(): void {
    if (this.salleForm.valid) {
      const formData = this.salleForm.value;
      this.salleService.updateSalle(this.existingSalle.id, formData).subscribe(
        (response: any) => {
          console.log("Client modifié envoyé avec succès", response);
          this.router.navigate(['salle/all']);
        },
        error => {
          console.error('Erreur lors de l\'envoi des données au backend', error);
        }
      );
    }
  }
}
