import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Message } from '../message';
import { AccountService } from '../account.service';
import { Socket } from 'ngx-socket-io';
import { NotificationCenterService } from 'src/app/notification-center.service';
import { ChangeDetectionPresenter } from 'src/app/change-detection';

@Component({
  selector: 'demo-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent extends ChangeDetectionPresenter implements OnInit {

  @Input()
  globalNotification: { value: string };

  messages: Message[] = [];

  constructor(
    public accountService: AccountService,
    private socket: Socket,
    private notificationCenter: NotificationCenterService,
    elementRef: ElementRef
  ) {
    super(elementRef);
  }

  ngOnInit() {
    this.socket.on('join', (userName: string) => {
      this.notificationCenter.notify({ message: userName, action: 'JOINED' });
    });

    this.receiveMessage();
  }

  joinAsUser(name: string) {
    this.socket.emit('join', { name });
    this.accountService.setUser(name);
  }

  sendMessage(message: Message) {
    this.socket.emit('message', message);
  }

  updateMessage(message: Message) {
    this.socket.emit('message-edited', message);
  }

  private receiveMessage() {
    this.socket.on('message', (message: Message) => {
      this.messages.push(message);
    });

    this.socket.on('message-edited', (message: Message) => {
      const index = this.messages.findIndex(msg => msg.date === message.date);

      if (!index && index !== 0) {
        return;
      }

      this.messages[index] = message;
    });
  }
}
