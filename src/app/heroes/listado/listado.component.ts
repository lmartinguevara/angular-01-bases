import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  heroeBorrado: string = "";

  borrarHeroe() {
    let borrado = this.heroes.shift();
    this.heroeBorrado = borrado || '';
  }
}
