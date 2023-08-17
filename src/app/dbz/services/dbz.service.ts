import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 500
  },{
    id: uuid(),
    name: 'Goku'
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  }];

  addCharacter( character: Character ): void {
    // console.log('lol', character);
    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index: number ): void {
  //   console.log('lol ', index);
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById( id:string ): void {
    this.characters = this.characters.filter( character => character.id !== id )
  }


}
