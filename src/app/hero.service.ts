import { Injectable } from '@angular/core';
import { AVENGERS } from './mock-avengers';
import {Avenger} from './avenger';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Avenger[]> {
    this.messageService.add('HeroService: fetched avengers from MCU');
    return of(AVENGERS);
  }
  getHero(id: number): Observable<Avenger> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(AVENGERS.find(hero => hero.id === id));
  }
}
