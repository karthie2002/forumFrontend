import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problemcard',
  templateUrl: './problemcard.component.html',
  styleUrls: ['./problemcard.component.scss'],
})
export class ProblemcardComponent {
  @Input() url: any ;
  @Input() question: any = '';
  @Input() questiondesc: any = '';

}
