import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

// console.log(uuid);

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilim',
    power: 9
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 43534
  }
];

addCharacter( character: Character ):void {
  const newCharacter: Character = { id: uuid(), ...character }
  this.characters.push(newCharacter);
}

// onDelete(index: number): void {
//   this.characters.splice(index, 1)
// }

deleteCharacterById( id: string ):void {
  this.characters = this.characters.filter( character => character.id !== id );
}

}
