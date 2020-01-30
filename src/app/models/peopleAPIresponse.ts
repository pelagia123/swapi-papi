import { Person } from './person';

export interface PeopleAPIresponse {
  count: number;
  next: string;
  previous: string;
  results: Array<Person>;
}
