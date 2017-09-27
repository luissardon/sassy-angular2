import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchQuery:string;

  constructor( private route:ActivatedRoute ) {
    this.searchQuery = route.queryParams['value'].q;
  }

  ngOnInit() {
  }

}
