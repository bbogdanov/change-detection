import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationCenterService {

  constructor(private _snackBar: MatSnackBar) { }

  notify(event: { message: string; action: string; }) {
    this._snackBar.open(event.message, event.action, {
      duration: 4000,
    });
  }
}
