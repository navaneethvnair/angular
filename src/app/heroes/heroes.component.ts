import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  avengers: Avenger[];
  selectedAvenger: Avenger;
onSelect(hero: Avenger) {
this.selectedAvenger = hero;
}
  constructor(private  heroService: HeroService) { }
  getHeroes(): void {
    this.avengers = this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }
}
