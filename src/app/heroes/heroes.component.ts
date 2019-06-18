import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  avengers: Avenger[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(avengers => this.avengers = avengers);
  }

}
