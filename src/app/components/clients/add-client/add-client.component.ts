import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/client.model";
import {ClientsService} from "../../../services/clients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm!: FormGroup;
  nameError: string | null = null;
  constructor(private formBuilder: FormBuilder,private clientService : ClientsService,private router: Router) { }

  ngOnInit(): void {
     this.initForm()
  }
  initForm(): void {
    this.clientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }
  onSubmit(): void {

    if(this.clientForm.valid){
      const formData = this.clientForm.value;
      this.clientService.createClient(formData).subscribe(
        (response)=>{
          console.log("Donnees des clients envoyer avec success",response);
          this.router.navigate(['supplier/all']);
        },
        (error)=>{
          console.error('Erreur lors de envoi des données au backend', error);
          if (error.status === 400) {
            this.nameError = 'Le nom du client existe déjà. Veuillez en choisir un autre.';
          } else {
            this.nameError = 'Une erreur s\'est produite lors de l\'ajout client.';
          }

        }
      )

    }
  }
}
