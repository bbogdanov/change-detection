import { Component, OnInit } from '@angular/core';
import { NotificationCenterService } from './notification-center.service';
import { tickets } from './tickets';
import { Ticket } from './ticket-system/ticket';

@Component({
  selector: 'demo-root',
  template: `
    <mat-toolbar style="display: flex">
      <div style="display: block; flex:1;">
        On Push - why and when <b style="color: #693761a4">Demo</b>
      </div>
      <div style="display: block; flex: 1;color:rgb(25, 105, 101);">
        Default strategy
      </div>
    </mat-toolbar>

    <main>
      <demo-ticket-system [data]="tickets" [users]="users" (add)="addTicket($event)"></demo-ticket-system>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tickets = tickets;
  users = tickets.map((ticket) => ticket.user);

  constructor(notificationCenter: NotificationCenterService) {}

  addTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }
}
