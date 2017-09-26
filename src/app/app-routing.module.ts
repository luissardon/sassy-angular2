// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 's', component: SearchComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { useHash: false } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
