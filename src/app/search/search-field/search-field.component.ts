import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'demo-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  @Output()
  searchFor = new EventEmitter<string>();
}
