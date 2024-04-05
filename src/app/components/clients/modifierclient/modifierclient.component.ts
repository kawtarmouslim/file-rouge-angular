import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../../models/client.model";
import {ClientsService} from "../../../services/clients.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modifierclient',
  templateUrl: './modifierclient.component.html',
  styleUrls: ['./modifierclient.component.css']
})
export class ModifierclientComponent implements OnInit {
  clientForm!: FormGroup;
  nameError: string | null = null;
  existingClient!: Client;
  clientId!: number;
  constructor(private formBuilder: FormBuilder,
              private clientService: ClientsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();


    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam) {
        this.clientId = +idParam; // Convertit l'ID en nombre
        this.getClientData();
      }
    });
  }
  getClientData(): void {
    this.clientService.getClientById(this.clientId!).subscribe(
      (client: Client) => {
        this.existingClient = client;
        this.updateForm();
      },
      error => {
        console.error("Erreur lors de la récupération du client :", error);
      }
    );
  }
  initForm(): void {
    this.clientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }

  updateForm(): void {
    if (this.existingClient) {
      this.clientForm.patchValue({
        nom: this.existingClient.nom,
        tel: this.existingClient.tel
      });
    }
  }
  onSubmit(): void {
    if (this.clientForm.valid) {
      const formData = this.clientForm.value;
      this.clientService.updateClient(this.existingClient.id, formData).subscribe(
        (response: any) => {
          console.log("Client modifié envoyé avec succès", response);
          this.router.navigate(['supplier/all']);
        },
        error => {
          console.error('Erreur lors de l\'envoi des données au backend', error);
        }
      );
    }
  }

}
