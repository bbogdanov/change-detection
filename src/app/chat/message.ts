import { User } from './user';

export interface Message {
  content: string;
  user: User;
  date: Date;
}
