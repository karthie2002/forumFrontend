import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotifierComponent } from '../components/notifier/notifier.component';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackbar: MatSnackBar) {}
  showNotification(displayMessage: string) {
    const snackBarRef = this.snackbar.openFromComponent(NotifierComponent);
    snackBarRef.instance.displayMessage = displayMessage;
    snackBarRef._dismissAfter(3000);
  }
}
