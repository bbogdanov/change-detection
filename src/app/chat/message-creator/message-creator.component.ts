import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Message } from '../message';
import { AccountService } from '../account.service';

@Component({
  selector: 'demo-message-creator',
  templateUrl: './message-creator.component.html',
  styleUrls: ['./message-creator.component.scss']
})
export class MessageCreatorComponent {

  @Output()
  send = new EventEmitter<Message>();

  constructor(private accountService: AccountService) { }

  sendMessage(content: string) {
    if (!content) {
      return;
    }

    this.send.emit({
      user: this.accountService.getUser(),
      content,
      date: new Date()
    });
  }

  empty(messageCreator: HTMLInputElement) {
    messageCreator.value = '';
  }

}
