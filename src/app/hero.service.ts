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
}
