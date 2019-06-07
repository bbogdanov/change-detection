import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user: User;

  getUser() {
    return this.user;
  }

  setUser(name: string) {
    this.user = {
      name
    };
  }
}
