import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PeopleAPIresponse } from '../models/peopleAPIresponse';
import { Person } from '../models/person';
import { Starship } from '../models/starship';
import { StarshipsAPIResponse } from '../models/starshipsAPIResponse';

@Injectable()
export class PeopleStarshipsService {
  public baseUrl = 'https://swapi.co/api/';

  public constructor(private http: HttpClient) {
  }

  public getRandomPerson(): Observable<Person> {
    const randomNumber = Math.floor(Math.random() * 8 + 1);
    return this.http.get<PeopleAPIresponse>(this.baseUrl + `people?page=${ randomNumber }`)
      .pipe(map(value => value.results[Math.floor(Math.random() * 8)]));
  }

  public getRandomStarship(): Observable<Starship> {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    return this.http.get<StarshipsAPIResponse>(this.baseUrl + `starships?page=${ randomNumber }`)
      .pipe(map(value => value.results[Math.floor(Math.random() * 8)]));
  }
}
