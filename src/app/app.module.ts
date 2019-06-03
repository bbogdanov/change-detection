import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Comp1Component } from './comp1/comp1.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp51Component } from './comp5/comp51/comp51.component';
import { Comp52Component } from './comp5/comp52/comp52.component';
import { Comp53Component } from './comp5/comp53/comp53.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp5Component,
    Comp51Component,
    Comp52Component,
    Comp53Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
