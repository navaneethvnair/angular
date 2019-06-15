import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';
import { HeroService } from '../hero.service';
import { AVENGERS } from '../mock-avengers';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  avengers: Avenger[];
  selectedAvenger: Avenger;

  constructor(private  heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Avenger) {
    this.selectedAvenger = hero;
    }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(avengers => this.avengers = avengers);
  }

}
