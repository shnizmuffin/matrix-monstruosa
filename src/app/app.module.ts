import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialDesignModule } from './app-material-design.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonstersComponent } from './monsters.component';
import { MonsterDetailComponent } from './monster-detail.component';

import { MonsterService } from './monster.service';
import { MonsterSearchComponent } from './monster-search/monster-search.component';

import 'hammerjs';

@NgModule( {
  declarations: [
    AppComponent,
    MonstersComponent,
    MonsterDetailComponent,
    DashboardComponent,
    MonsterSearchComponent,
    NavbarComponent
  ],
  // import order matters!
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialDesignModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MonsterService ],
  bootstrap: [ AppComponent ]
} )

export class AppModule {}
