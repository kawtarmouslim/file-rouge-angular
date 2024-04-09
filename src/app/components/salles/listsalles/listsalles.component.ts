import { Component, OnInit } from '@angular/core';
import {Salle} from "../../../models/salle.model";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../../models/client.model";
import {ClientsService} from "../../../services/clients.service";
import {SalleService} from "../../../services/salle.service";

@Component({
  selector: 'app-listsalles',
  templateUrl: './listsalles.component.html',
  styleUrls: ['./listsalles.component.css']
})
export class ListsallesComponent implements OnInit {
     salles!:Salle[];
  constructor(private salleSercive:SalleService) { }

  ngOnInit(): void {
    this.getAllSalles();
  }
  getAllSalles() {
    this.salleSercive.getAllSalles().subscribe({
      next: (data) => {
        console.log(data); // Log the data to verify its structure
        this.salles = data;

      },
      error: (error) => {
        console.error('error lors de la recuperationde la liste des salles', error);
        if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
          // Handle the connection refused error specifically
          console.error('Connection refused. Please check the server status.');
          // Optionally, show a user-friendly message or redirect the user
        }
      }
    });
  }



  confirmAndDelete(salle:Salle): void {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce salle ?');

    if (confirmDelete) {
      this.deleteSalle(salle);
    }
  }

  deleteSalle(salle:Salle){
    let index=this.salles.indexOf(salle);
    this.salleSercive.deleteSalle(salle.id).subscribe(
      () => {
        console.log('Salle supprime avec succes');
        this.salles.splice(index,1)
      },
      (error) => {
        console.error('Erreur lors de la suppression du salle', error);
      }
    )

  }
}
