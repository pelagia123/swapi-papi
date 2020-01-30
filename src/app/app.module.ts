import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { PeopleStarshipsService } from './services/people-starships.service';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    PersonCardComponent,
    StarshipCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [PeopleStarshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
