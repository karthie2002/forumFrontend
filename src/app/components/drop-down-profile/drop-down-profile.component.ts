import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-profile',
  templateUrl: './drop-down-profile.component.html',
  styleUrls: ['./drop-down-profile.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class DropDownProfileComponent {
  isOpenDropDown: boolean = false;

  onClickDropDown(event: Event) {
    event.preventDefault();
    this.isOpenDropDown = !this.isOpenDropDown;
  }

  deleteUser(event: Event) {
    event.preventDefault();
    console.log('Deleted');
  }
}
