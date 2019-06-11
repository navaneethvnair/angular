import { Injectable } from '@angular/core';
import { AVENGERS } from './mock-avengers';
import {Avenger} from './avenger';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Avenger[] {
    return AVENGERS;
  }
  constructor() { }
}
