import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdListModule,
  MdCardModule,
  MdExpansionModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdMenuModule
} from '@angular/material';

@NgModule( {
  imports: [
    CommonModule,
    MdListModule,
    MdCardModule,
    MdExpansionModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule
  ],
  exports: [
    MdListModule,
    MdCardModule,
    MdExpansionModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule
  ],
  declarations: []
} )
export class AppMaterialDesignModule {}
