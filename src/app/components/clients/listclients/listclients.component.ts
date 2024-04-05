import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/client.model";
import {ClientsService} from "../../../services/clients.service";

@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {
  clients: Client[] = [];


  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getAllClients();

  }
  getAllClients() {
    this.clientsService.getAllClients().subscribe({
      next: (data) => {
        console.log(data); // Log the data to verify its structure
        this.clients = data;

      },
      error: (error) => {
        console.error('error lors de la recuperationde la liste des clients', error);
        if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
          // Handle the connection refused error specifically
          console.error('Connection refused. Please check the server status.');
          // Optionally, show a user-friendly message or redirect the user
        }
      }
    });
  }



  confirmAndDelete(client:Client): void {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce client ?');

    if (confirmDelete) {
      this.deleteClient(client);
    }
  }

  deleteClient(client:Client){
    let index=this.clients.indexOf(client);
    this.clientsService.deleteClient(client.id).subscribe(
      () => {
        console.log('Client supprime avec succes');
        this.clients.splice(index,1)
      },
      (error) => {
        console.error('Erreur lors de la suppression du Client', error);
      }
    )

  }


}
