import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { ICharacter } from '../../_models/character';

@Injectable()
export class CharactersApiService {

  private API_URL:string = environment.apiBaseUrl + '/characters';

  constructor( private http:Http ) { }

  public search( opts:any = { orderBy: 'name' }, operator:string = '' ):Observable<ICharacter[]> {
    const {
      orderBy
    } = opts;

    const search = new URLSearchParams();
    search.set( 'orderBy', orderBy );
    search.set( 'apikey', window[ 'CONFIG' ].apikey );

    const options = new RequestOptions( { search } );
    const url = `${ this.API_URL }${ operator }`;

    return this.http.get( url, options )
               .map( ( response:Response ) => response.json().data.results as ICharacter[] );
  }

}
