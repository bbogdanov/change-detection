import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MessageCreatorComponent } from './message-creator/message-creator.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MessageHolderComponent } from './message-holder/message-holder.component';
import { EditButtonComponent } from './edit-button/edit-button.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [ChatComponent, MessageCreatorComponent, MessageHolderComponent, EditButtonComponent],
  exports: [ChatComponent, MessageCreatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    SocketIoModule.forRoot(config),
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ChatModule { }
