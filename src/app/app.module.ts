import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationCenterService } from './notification-center.service';
import { TicketSystemModule } from './ticket-system/ticket-system.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TicketSystemModule,

    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [
    NotificationCenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
