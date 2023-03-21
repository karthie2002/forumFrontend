import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question: string = 'How designers estimate the impact of UX?';
  @Input() description: string =
    'Colors often considered "shades of white" include cream, eggshell, ivory, Navajo white, and vanilla.';
  @Input() username: string = 'Anne Lee';
  @Input() category: string = 'Technology';
  @Input() date: string = 'Nov 1, 2022';
  @Input() userProfile: string =
    'https://www.iwmbuzz.com/wp-content/uploads/2022/07/bff-goals-selena-gomez-celebrates-her-30th-birthday-with-taylor-swift-says-nerdy-and-worthy-2.jpg';
  @Input() problemImg: string =
    'https://static.vecteezy.com/system/resources/previews/002/099/717/original/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg';
  constructor() {}
}
