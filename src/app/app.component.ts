import { Component } from '@angular/core';
import { tickets } from './tickets';
import { Ticket } from './ticket-system/ticket';
import { List } from 'immutable';

@Component({
  selector: 'demo-root',
  template: `
    <mat-toolbar style="display: flex">
      <div style="display: block; flex:1;">
        On Push - why and when <b style="color: #693761a4">Demo</b>
      </div>
    </mat-toolbar>

    <main>
      <demo-ticket-search (search)="search($event)" [searchResult]="searchResult"></demo-ticket-search>
      <demo-ticket-system [data]="tickets" (add)="addTicket($event)"></demo-ticket-system>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tickets = List(tickets);

  searchResult = List();

  addTicket(ticket: Ticket) {
    this.tickets = this.tickets.push(ticket);
  }

  search(text: string) {
    if (!text) {
      this.searchResult = List([]);
      return;
    }

    const results = this.tickets.filter((ticket: Ticket) => ticket.description.indexOf(text) > -1);

    this.searchResult = List(results);
  }
}
