import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { ChangeDetectionPresenter } from 'src/app/change-detection';

@Component({
  selector: 'demo-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent extends ChangeDetectionPresenter {

  @Output()
  triggerEdit = new EventEmitter<never>();

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
