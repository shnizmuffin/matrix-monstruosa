import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonstersComponent } from './monsters.component';
import { MonsterDetailComponent } from './monster-detail.component';

import { MonsterService } from './monster.service';
import { MonsterSearchComponent } from './monster-search/monster-search.component';


@NgModule( {
  declarations: [
    AppComponent,
    MonstersComponent,
    MonsterDetailComponent,
    DashboardComponent,
    MonsterSearchComponent
  ],
  //import order matters!
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MonsterService ],
  bootstrap: [ AppComponent ]
} )

export class AppModule {}
