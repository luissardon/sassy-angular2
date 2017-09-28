import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CharactersApiService } from './api/characters-api.service';

import { ICharacter } from '../_models/character';

@Injectable()
export class CharactersService {

  private charactersUrl:string = '';

  constructor(
    private http:Http,
    private api:CharactersApiService
  ) { }

  getCharacters():Promise<ICharacter[]> {
    return this.api.search()
               .toPromise();
  }

}
