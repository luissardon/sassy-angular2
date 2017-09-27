import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  private searchControl:FormControl;

  constructor( private router:Router, private fb:FormBuilder ) {
    this.searchControl = fb.control( '' );
  }

  ngOnInit() {
  }

  handleSubmit = ( e ) => {
    e.preventDefault();

    const queryParams = { q: this.searchControl.value };
    const pathname = '/s';

    this.router.navigate(
      [ pathname ],
      { queryParams }
    );
  }

}
