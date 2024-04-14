import { TestBed } from '@angular/core/testing';
import { ClientsService } from './clients.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Client} from "../models/client.model";
import * as url from "url";

describe('ClientsService', () => {
  let service: ClientsService;
  let url = "http://localhost:8088/api/clients";
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientsService],
    });
    service = TestBed.inject(ClientsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('devrait récupérer la liste des client', () => {
    service.getAllClients().subscribe((clients) => {
      console.log('Liste des clients :', clients);
      expect(clients.length).toBeGreaterThan(0);
    });
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
  })
it('devrait récupérer un client par ID', () => {
  const idToGet = 1;
  const clients: Client[] = [
    {
      id:1,
      nom:"kawtar",
      tel:" 086384224",

    },
    {
      id:2,
      nom:"salma",
      tel:"+2124678899",

    },

  ];
  const dummyClient: Client = {
    id:1,
    nom:"kawtar",
    tel:"2123648930",

  }

  service.getClientById(idToGet).subscribe(clients => {
    expect(clients).toEqual(dummyClient);
    const req = httpTestingController.expectOne(`${url}/${idToGet}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClient);


  });
});
  it('devrait modifier un client', () => {
    const idToUpdate = 3;
    const updatedClient: Client = {
      id:3,
      nom:"khawla",
      tel:"+54265"

    };
    service.updateClient( idToUpdate,updatedClient).subscribe((response) => {
      expect(response).toEqual(updatedClient);
      const req = httpTestingController.expectOne(`${url}/${idToUpdate}`);
      expect(req.request.method).toBe('PUT');
      req.flush(updatedClient);
    });
  });
  it('devrait supprimer un client', () => {
    const idToDelete = 1;
    service.deleteClient(idToDelete).subscribe(() => {
      const req = httpTestingController.expectOne(`${url}/${idToDelete}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });
});
