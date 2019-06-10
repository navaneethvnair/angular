import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';
import { AVENGERS } from '../mock-avengers';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Avenger = {
    id: 3,
    name: 'thor'
  };
  avengers = AVENGERS;
  selectedAvenger: Avenger;
onSelect(hero: Avenger) {
this.selectedAvenger = hero;
}
  constructor() { }

  ngOnInit() {
  }
}
