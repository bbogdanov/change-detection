import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './search-field/search-field.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SearchFieldComponent],
  exports: [SearchFieldComponent],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class SearchModule { }
