import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = 'Componente peliculas';
    this.peliculas = [
      new Pelicula("Spiderman", 2017, "https://cnet1.cbsistatic.com/img/rfzZ-7G32v_qEt2uCD0b4KB2rho=/940x0/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg"),
      new Pelicula("Los vengadores End Game", 2018, "https://depor.com/resizer/9ZsjMlERzoJY66cocLg7-lOEVTU=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/CF4TRU7DTNEOJCEOSX2VNBGE54.jpg"),
      new Pelicula("Batman vs. Superman", 2019, "https://ichef.bbci.co.uk/news/ws/410/amz/worldservice/live/assets/images/2016/03/23/160323133140_batman_vs_superman_304x171_dcmovies_nocredit.jpg"),
    ];
  }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

  ngDoCheck(){
    console.log('DoCheck lanzado');
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado !";
  }

  ngOnDestroy() {
    console.log('El componente se va eliminar');
  }

}
