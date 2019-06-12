import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'demo-ticket-system',
  template: `
    <h1>Tickets</h1>

    <demo-ticket-create (add)="add.emit($event)"></demo-ticket-create>

    <mat-list>
      <div *ngIf="data.length === 0" class="empty-list-label">Empty list</div>
      <mat-list-item class="ticket" *ngFor="let ticket of data">
        <mat-icon mat-list-icon>assignment</mat-icon>
        <h2 mat-line>{{ ticket.description }}</h2>
        <p mat-line>
          Completed:
          <mat-icon *ngIf="ticket.completed" mat-list-icon>done_all</mat-icon>
          <mat-icon *ngIf="!ticket.completed" mat-list-icon>clear</mat-icon>
        </p>
        <p>{{ createId() }}</p>
        <p mat-line>User: {{ ticket.user }}</p>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./ticket-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketSystemComponent {

  @Input()
  data: Ticket[];

  @Output()
  add = new EventEmitter<Ticket>();

  createId() {
    return Math.floor(Math.random() * 15000) + 1;
  }
}
