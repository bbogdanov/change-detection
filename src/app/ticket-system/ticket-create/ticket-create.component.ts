import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tickets } from 'src/app/tickets';
import { Ticket } from '../ticket';

@Component({
  selector: 'demo-ticket-create',
  template: `
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
        [(indeterminate)]="indeterminate">
        Completed
      </mat-checkbox>

      <button mat-raised-button color="accent">Create</button>
    </form>
  `,
  styleUrls: ['./ticket-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCreateComponent {
  users = tickets.map((ticket) => ticket.user);

  newTicketForm = new FormGroup({
    description: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    completed: new FormControl(false)
  });

  @Output()
  add = new EventEmitter<Ticket>();

  createTicket() {
    if (this.newTicketForm.valid) {
      this.add.emit(this.newTicketForm.value);
      this.newTicketForm.reset();
    }
  }
}
