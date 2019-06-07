import { Component, ElementRef, OnInit } from '@angular/core';
import { NotificationCenterService } from './notification-center.service';
import { AccountService } from './chat/account.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  globalMessage: { value: string };

  constructor(
    public accountService: AccountService,
    private socket: Socket,
    notificationCenter: NotificationCenterService,
    element: ElementRef
  ) {
  }

  ngOnInit() {
    this.socket.on('globalMessage', (message: { value: string }) => {
     this.globalMessage = message;
    });
  }

  changeGlobalMessage(value: string) {
    this.socket.emit('globalMessage', { value });
  }

  searchFor(text: string) {
    // if (text) {
    //   this.characters = this.allCharacters.filter(character => {
    //     return character.name.indexOf(text) > -1;
    //   });
    // } else {
    //   this.characters = this.allCharacters;
    // }
  }
}
