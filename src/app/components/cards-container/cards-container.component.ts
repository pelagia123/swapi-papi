import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Person } from '../../models/person';
import { Starship } from '../../models/starship';
import { Winner } from '../../models/winner';
import { PeopleStarshipsService } from '../../services/people-starships.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: [ './cards-container.component.scss' ]
})
export class CardsContainerComponent implements OnInit {
  public personA: Observable<Person>;
  public personB: Observable<Person>;
  public starshipA: Observable<Starship>;
  public starshipB: Observable<Starship>;
  public peopleBattleModeOn = true;
  public winner: Winner;
  public winningValue: number;

  public constructor(private service: PeopleStarshipsService) {
  }

  public ngOnInit(): void {
    this.drawPeople();
  }

  public drawShips(): void {
    this.winningValue = 0;
    this.starshipA = this.service.getRandomStarship()
      .pipe(
        tap(value => this.chooseWinner(Number(value.crew), Winner.A))
      );
    this.starshipB = this.service.getRandomStarship()
      .pipe(
        tap(value => this.chooseWinner(Number(value.crew), Winner.B))
      );
  }

  public drawPeople(): void {
    this.winningValue = 0;
    this.personA = this.service.getRandomPerson()
      .pipe(
        tap(value => this.chooseWinner(Number(value.height), Winner.A))
      );
    this.personB = this.service.getRandomPerson()
      .pipe(
        tap(value => this.chooseWinner(Number(value.height), Winner.B))
      );
  }

  public toggleBattleMode(): void {
    this.peopleBattleModeOn = !this.peopleBattleModeOn;
    this.peopleBattleModeOn ? this.drawPeople() : this.drawShips();
  }

  public chooseWinner(value: number, winner: Winner): void {
    if (value > this.winningValue) {
      this.winningValue = value;
      this.winner = winner;
    } else if (value === this.winningValue) {
      this.winner = Winner.AB;
    }
  }
}
