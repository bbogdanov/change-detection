import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchModule } from './search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsModule } from './star-wars/star-wars.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationCenterService } from './notification-center.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    SearchModule,
    StarWarsModule,

    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    NotificationCenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
