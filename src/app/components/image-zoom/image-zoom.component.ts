import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms ease-in', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ImageZoomComponent {
  @Input() userProfile: string = '../../asset/images/user.png';
  @Output() onZoomEmit = new EventEmitter();
  btnClick(): void {
    this.onZoomEmit.emit();
  }
}
