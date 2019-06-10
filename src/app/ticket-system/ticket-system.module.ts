import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketSystemComponent } from './ticket-system/ticket-system.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [TicketSystemComponent],
  exports: [TicketSystemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TicketSystemModule {}
