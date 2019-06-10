import { Component, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Ticket } from '../ticket';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import { fibonacci } from 'src/app/fibonacci';

@Component({
  selector: 'demo-ticket-system',
  template: `
    <h1>Tickets</h1>

    <form [formGroup]="newTicketForm" (ngSubmit)="createTicket()">
      <mat-form-field>
        <input
          matInput
          placeholder="Enter new description ticket here"
          type="text"
          formControlName="description"
        />
      </mat-form-field>
      <mat-select placeholder="Select user..." formControlName="user">
        <mat-option *ngFor="let user of users" [value]="user">{{
          user
        }}</mat-option>
      </mat-select>
      <mat-checkbox
        formControlName="completed"
        [(indeterminate)]="indeterminate"
      >
        Completed
      </mat-checkbox>

      <button mat-raised-button color="accent">Create</button>
    </form>

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
        <p>{{ calculate() }}</p>
        <p mat-line>User: {{ ticket.user }}</p>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./ticket-system.component.scss']
})
export class TicketSystemComponent {
  newTicketForm = new FormGroup({
    description: new FormControl(''),
    user: new FormControl(),
    completed: new FormControl(false)
  });

  @Input()
  users: User[];

  @Input()
  data: Ticket[];

  @Output()
  add = new EventEmitter<Ticket>();

  @Output()
  remove = new EventEmitter<Ticket>();

  constructor(private cdr: ChangeDetectorRef) {}

  createTicket() {
    if (this.newTicketForm.valid) {
      this.add.emit(this.newTicketForm.value);
      this.newTicketForm.reset();
    }
  }

  calculate() {
    return fibonacci(Math.floor(Math.random() * 20) + 1);
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
