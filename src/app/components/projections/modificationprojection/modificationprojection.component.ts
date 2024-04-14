import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Salle} from "../../../models/salle.model";
import {Projeection} from "../../../models/projeection.model";
import {SalleService} from "../../../services/salle.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectionService} from "../../../services/projection.service";

@Component({
  selector: 'app-modificationprojection',
  templateUrl: './modificationprojection.component.html',
  styleUrls: ['./modificationprojection.component.css']
})
export class ModificationprojectionComponent implements OnInit {
  projectionForm!: FormGroup;
  nameError: string | null = null;
  existingProjection!: Projeection;
  prjectionId!: number;
  constructor(private formBuilder: FormBuilder,
              private projectionService: ProjectionService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();

    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam) {
        this.prjectionId = +idParam;
        this.getProjectionData();
      }
    });
  }
  getProjectionData(): void {
    this.projectionService.getProjectionById(this.prjectionId!).subscribe(
      (projection: Projeection) => {
        this.existingProjection = projection;
        this.updateForm();
      },
      error => {
        console.error("Erreur lors de la récupération du salle :", error);
      }
    );
  }
  initForm(): void {
    this.projectionForm = this.formBuilder.group({
      dateProjection: ['', Validators.required],
      prix: ["", Validators.required],
      salle: ['', Validators.required],
      film: ['', Validators.required]
    });
  }

  updateForm(): void {
    if (this.existingProjection) {
      this.projectionForm.patchValue({
        dateProjection: this.existingProjection.dateProjection,
        prix: this.existingProjection.prix,
        salle: this.existingProjection.salle.name,
        film: this.existingProjection.film.titre,
      });
    }
  }
  onSubmit(): void {
    if (this.projectionForm.valid) {
      const formData = this.projectionForm.value;
      this.projectionService.updateProjection(this.existingProjection.id, formData).subscribe(
        (response: any) => {
          console.log("Projecion modifié envoyé avec succès", response);
          this.router.navigate(['projection/all']);
        },
        error => {
          console.error('Erreur lors de l\'envoi des données au backend', error);
        }
      );
    }
  }
}
