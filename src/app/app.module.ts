import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { MapBoxService } from './_services/map-box.service';

@NgModule({
   declarations: [
      AppComponent,
      MapComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      MapBoxService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
