import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
//import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroDetailReactiveComponent } from './hero-detail-reactive/hero-detail-reactive.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ForbiddenValidatorDirective,
    HeroDetailReactiveComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }