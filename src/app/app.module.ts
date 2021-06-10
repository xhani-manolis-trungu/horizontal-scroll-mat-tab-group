import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports:
    [
      BrowserModule,
      BrowserAnimationsModule,
      MatTabsModule
    ],
  declarations:
    [
      AppComponent
    ],
  bootstrap:
    [
      AppComponent
    ]
})
export class AppModule { }
