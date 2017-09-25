import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {

  private logo:string = './assets/logo.svg';

  constructor() { }

  ngOnInit() {
  }

}
