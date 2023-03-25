import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: string = '';
  @Input() description: string = '';
  @Input() username: string = '';
  @Input() category: string | null = '';
  @Input() date: number = 0;
  @Input() userProfile: string = '';
  @Input() problemImg: string = '';
  constructor() {}

  getDate(num: number) {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(num));
  }
}
