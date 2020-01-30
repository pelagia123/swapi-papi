import { Starship } from './starship';

export interface StarshipsAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<Starship>;
}
