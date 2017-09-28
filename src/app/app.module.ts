import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';

// Services
import { CharactersApiService } from './_services/api/characters-api.service';
import { CharactersService } from './_services/characters.service';

// Components
import { LayoutComponent } from './common/layout/layout.component';
import { HeaderComponent } from './common/header/header.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    SearchModule
  ],
  providers: [
    CharactersApiService,
    CharactersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
