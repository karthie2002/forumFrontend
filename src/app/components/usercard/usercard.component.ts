import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
})
export class UsercardComponent {
  @Input() url: any = '';
  @Input() username: any = '';
  @Input() userdesc: any = '';
  @Input() tech: any = [];
 
}
