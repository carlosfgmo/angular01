import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
})
export class MiComponente {

    public titulo: string;
    public comentario: string;
    public anho: number;
    public mostrarPeliculas: boolean;

    constructor() {
        this.titulo = "Titulo desde el componente";
        this.comentario = "Comentario del componente";
        this.anho = 2021;
        this.mostrarPeliculas = true;
        console.log('Componente mi-componente cargado!');
        console.log(this.titulo, this.comentario, this.anho);
    }

    ocultarPeliculas() {
        this.mostrarPeliculas = false;
    }

}