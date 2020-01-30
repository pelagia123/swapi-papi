import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  @Input() public person: Observable<Person>;
  @Input() public winner: boolean;
}
