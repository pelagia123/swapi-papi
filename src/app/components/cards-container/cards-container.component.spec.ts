import { hot } from 'jasmine-marbles';
import { instance, mock, resetCalls, verify, when } from 'ts-mockito';
import { Person } from '../../models/person';
import { Starship } from '../../models/starship';
import { Winner } from '../../models/winner';
import { PeopleStarshipsService } from '../../services/people-starships.service';
import { CardsContainerComponent } from './cards-container.component';

describe('CardsContainerComponent', () => {
  const service = mock(PeopleStarshipsService);
  const component = new CardsContainerComponent(instance(service));

  const PERSON_A = {
    name: 'Name A',
    height: '187'
  } as Person;
  const PERSON_B = {
    name: 'Name B',
    height: '98'
  } as Person;

  const STARSHIP_A = {
    name: 'Starship A',
    crew: '1'
  } as Starship;
  const STARSHIP_B = {
    name: 'Starship B',
    crew: '54625765276'
  } as Starship;

  beforeEach(() => {
    when(service.getRandomPerson()).thenReturn(
      hot('a--b', { a: PERSON_A, b: PERSON_B }));
    when(service.getRandomStarship()).thenReturn(
      hot('a--b', { a: STARSHIP_A, b: STARSHIP_B }));
  });

  afterEach(() => {
    resetCalls(service);
  });

  it('should draw people on ngOnInit', () => {
    spyOn(component, 'drawPeople');
    component.ngOnInit();
    expect(component.drawPeople).toHaveBeenCalled();
  });

  it('should switch battle mode on toggleBattleMode and call proper method', () => {
    spyOn(component, 'drawPeople');
    spyOn(component, 'drawShips');
    component.toggleBattleMode();
    expect(component.peopleBattleModeOn).toBeFalse();
    expect(component.drawShips).toHaveBeenCalled();
    component.toggleBattleMode();
    expect(component.peopleBattleModeOn).toBeTrue();
    expect(component.drawPeople).toHaveBeenCalled();
  });

  it('should call getRandomPerson twice on drawPeople', () => {
    component.drawPeople();
    verify(service.getRandomPerson()).twice();
  });

  it('should call getRandomStarship twice on drawShips', () => {
    component.drawShips();
    verify(service.getRandomStarship()).twice();
  });

  it('should choose correct winner', () => {
    component.winningValue = 0;
    component.chooseWinner(98, Winner.A);
    expect(component.winner).toEqual(0);
    component.chooseWinner(145, Winner.B);
    expect(component.winner).toEqual(1);
    component.chooseWinner(145, Winner.A);
    expect(component.winner).toEqual(2);
  });

});
