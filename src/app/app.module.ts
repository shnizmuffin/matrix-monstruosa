import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialDesignModule } from './app-material-design.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonstersComponent } from './monsters.component';
import { MonsterSearchComponent } from './monster-search/monster-search.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { OffenseComponent } from './monster-detail/offense.component';
import { DefenseComponent } from './monster-detail/defense.component';
import { GeneralComponent } from './monster-detail/general.component';
import { StatisticsComponent } from './monster-detail/statistics.component';
import { SpecialAbilitiesComponent } from './monster-detail/special-abilities.component';
import { EcologyComponent } from './monster-detail/ecology.component';

import { MonsterService } from './monster.service';
import { DashboardService } from './dashboard/dashboard.service';
import { AlertService } from './alert/alert.service';

import 'hammerjs';
import { AuthGuard } from './auth.guard';
import { customHttpProvider } from './custom-http.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { KeysPipe } from './keys.pipe';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MonsterDetailComponent,
    MonsterSearchComponent,
    MonstersComponent,
    OffenseComponent,
    DefenseComponent,
    GeneralComponent,
    StatisticsComponent,
    SpecialAbilitiesComponent,
    EcologyComponent,
    KeysPipe
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
  providers: [
    customHttpProvider,
    MonsterService,
    DashboardService,
    AlertService,
    AuthGuard,
    AuthService,
    UserService
  ],
  bootstrap: [ AppComponent ]
} )

export class AppModule {}
