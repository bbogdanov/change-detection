import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionPresenter } from 'src/app/change-detection';
import { Message } from '../message';

@Component({
  selector: 'demo-message-holder',
  templateUrl: './message-holder.component.html',
  styleUrls: ['./message-holder.component.scss']
})
export class MessageHolderComponent extends ChangeDetectionPresenter {
  @Input()
  enableEdit: boolean;

  @Input()
  message: Message;

  @Output()
  updateMessage = new EventEmitter<Message>();

  editMode: boolean;

  constructor(element: ElementRef) {
    super(element);
  }

  triggerEdit() {
    if (this.editMode) {
      this.editMode = false;

      return;
    }

    this.editMode = true;
  }
}
