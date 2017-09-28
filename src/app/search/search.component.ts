import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICharacter } from '../_models/character';

import { CharactersService } from '../_services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchTerm:string;
  private characters:ICharacter[];

  constructor( private route:ActivatedRoute, private cs:CharactersService ) {
    this.searchTerm = route.queryParams['value'].q;
  }

  ngOnInit() {
    this.cs.getCharacters()
        .then( ( characters:ICharacter[] ) => {
          this.characters = characters;
          console.log( this.characters );
        } );
  }

  private getThumbnail( character:ICharacter ) {
    return `${ character.thumbnail.path }.${ character.thumbnail.extension }`;
  }

}
