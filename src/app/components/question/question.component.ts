import { Component, Input } from '@angular/core';
import {
  AddCategory,
  QuestionService,
} from 'src/app/service/main-page/question.service';
import { NotifierService } from 'src/app/service/notifier.service';

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
  constructor(
    private questionService: QuestionService,
    private notifierService: NotifierService
  ) {}

  addCateg() {
    if (this.question != null || this.category != null) {
      this.questionService
        .AddQuestionToCategory(this.question, this.category as string)
        .subscribe((value: AddCategory) => {
          console.log(value);
        });
    } else {
      this.notifierService.showNotification(
        'Question Description field cannot be empty'
      );
    }
  }
}
