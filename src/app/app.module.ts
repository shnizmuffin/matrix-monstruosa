import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonstersComponent } from './monsters.component';
import { MonsterDetailComponent } from './monster-detail.component';

import { MonsterService } from './monster.service';

import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [ MonsterService ],
  bootstrap: [ AppComponent ]
} )

export class AppModule {}
