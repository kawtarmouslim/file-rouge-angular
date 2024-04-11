import {Client} from "./client.model";
import {Projeection} from "./projeection.model";
import {Place} from "./place.model";
import {Film} from "./film.model";
import {Salle} from "./salle.model";


export interface Ticket {
  id: number;
  prix: number;
  client: Client;
  place:Place;
  film:Film;
  salle:Salle;
  projection: Projeection;


}
