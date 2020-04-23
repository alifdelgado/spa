import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;

  constructor(private ar: ActivatedRoute, private hs: HeroesService) { }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.termino = params.heroe;
      this.heroes = this.hs.buscarHeroes(params.heroe);
    });
  }

}
