import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  isAddCateg: boolean = false;
  constructor(
    private questionService: QuestionService,
    private notifierService: NotifierService
  ) {}

  addCateg(event: Event) {
    event.stopPropagation();
    // console.log('addcateg', this.category, this.question);
    if (this.question != null || this.category != null) {
      this.isAddCateg = !this.isAddCateg;
    } else {
      this.notifierService.showNotification(
        'Question Description field cannot be empty'
      );
    }
  }
}
