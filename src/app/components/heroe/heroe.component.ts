import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(private ar: ActivatedRoute, private hs: HeroesService) { }

  ngOnInit() {
    this.ar.params.subscribe(params => this.heroe = this.hs.getHeroe(params.id));
  }
}
