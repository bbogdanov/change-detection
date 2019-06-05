import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCharacterComponent } from './add-character/add-character.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddCharacterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AddCharacterModule { }
