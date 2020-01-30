import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship } from '../../models/starship';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: [ './starship-card.component.scss' ]
})
export class StarshipCardComponent {
  @Input() public starship: Observable<Starship>;
  @Input() public winner: boolean;
}
