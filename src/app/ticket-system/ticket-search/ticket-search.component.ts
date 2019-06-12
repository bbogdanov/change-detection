import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'immutable';
import { Ticket } from '../ticket';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'demo-ticket-search',
  template: `
    <mat-form-field>
      <input #searchEl
       matInput type="text" placeholder="Search for ticket" (keyup.enter)="search.emit(searchEl.value)" />
    </mat-form-field>

    <mat-list>
      <div *ngIf="searchResult.size === 0" class="empty-list-label">List is empty</div>
      <mat-list-item class="ticket" *ngFor="let ticket of searchResult">
        <mat-icon mat-list-icon>assignment</mat-icon>
        <h2 mat-line>{{ ticket.description }}</h2>
        <p mat-line>
          Completed:
          <mat-icon *ngIf="ticket.completed" mat-list-icon>done_all</mat-icon>
          <mat-icon *ngIf="!ticket.completed" mat-list-icon>clear</mat-icon>
        </p>
        <p mat-line>User: {{ ticket.user }}</p>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./ticket-search.component.scss'],
})
export class TicketSearchComponent {
  @Input()
  searchResult: List<Ticket>;

  @Output()
  search = new EventEmitter<string>();
}
