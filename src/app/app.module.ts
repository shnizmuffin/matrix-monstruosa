import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonstersComponent } from './monsters.component';
import { MonsterDetailComponent } from './monster-detail.component';

import { MonsterService } from './monster.service';


@NgModule( {
  declarations: [
    AppComponent,
    MonstersComponent,
    MonsterDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot( InMemoryDataService ),
    HttpModule
  ],
  providers: [ MonsterService ],
  bootstrap: [ AppComponent ]
} )

export class AppModule {}
