import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tooltiplogout',
  templateUrl: './tooltiplogout.component.html',
  styleUrls: ['./tooltiplogout.component.scss'],
})
export class TooltiplogoutComponent {
  @Output() buttonClicked = new EventEmitter();
  @Output() onLogout = new EventEmitter();
  onClick() {
    this.buttonClicked.emit();
  }
  onLogoutClick() {
    this.onLogout.emit();
  }
}
