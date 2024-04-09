import { Component, OnInit } from '@angular/core';
import {Client} from "../../../models/client.model";
import {ClientsService} from "../../../services/clients.service";
import {PlaceService} from "../../../services/place.service";
import {Place} from "../../../models/place.model";

@Component({
  selector: 'app-listplaces',
  templateUrl: './listplaces.component.html',
  styleUrls: ['./listplaces.component.css']
})
export class ListplacesComponent implements OnInit {

  places: Place[] = [];


  constructor(private placeServive: PlaceService) { }

  ngOnInit(): void {
    this.getAllPlaces();

  }
  getAllPlaces() {
    this.placeServive.getAllPlaces().subscribe({
      next: (data) => {
        console.log(data); // Log the data to verify its structure
        this.places = data;

      },
      error: (error) => {
        console.error('error lors de la recuperationde la liste des places', error);
        if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
          // Handle the connection refused error specifically
          console.error('Connection refused. Please check the server status.');
          // Optionally, show a user-friendly message or redirect the user
        }
      }
    });
  }



  confirmAndDelete(client:Client): void {
   const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce place ?');
  //
  //   if (confirmDelete) {
  //     this.deletePlace(place);
  //   }
  }

  // deletePlace(place:Place){
  //   let index=this.places.indexOf(place);
  //   this.placeServive.del(client.id).subscribe(
  //     () => {
  //       console.log('Client supprime avec succes');
  //       this.clients.splice(index,1)
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la suppression du Client', error);
  //     }
  //   )
  //
  // }

}
