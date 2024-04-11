import {Salle} from "./salle.model";
import {Film} from "./film.model";

export interface Projeection {
  id: number;
  dateProjection: Date;
  prix: number;
  salle:Salle;
  film:Film;
  salleId:string;
  filmId:string;
}
