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

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeroesModalComponent } from './heroes-modal/heroes-modal.component';
import { HeroesModal2Component } from './heroes-modal2/heroes-modal2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ForbiddenValidatorDirective,
    HeroDetailReactiveComponent,
    HeroesModalComponent,
    HeroesModal2Component
  ],
  entryComponents: [HeroesModalComponent, HeroesModal2Component],
  bootstrap: [ AppComponent ]
})
export class AppModule { }