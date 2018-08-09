import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  
  public doubleCounter: number = 0;

  constructor(
    private heroService: HeroService,
    private counterService: CounterService) { }

  ngOnInit() {
    this.getHeroes();
    // this.counterService.counterSubject.subscribe( num => {
    //     this.doubleCounter = num * 2;
    // });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  count(): void {
    this.counterService.incrementCounter();
  }
}