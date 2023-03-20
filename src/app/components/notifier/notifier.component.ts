import { Component, Input } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent {
  constructor(private snackBarRef: MatSnackBarRef<NotifierComponent>) {}
  @Input() displayMessage: string | undefined;
  
  dismiss() {
    this.snackBarRef.dismiss();
  }
}
