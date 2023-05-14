import { Component, Input } from '@angular/core';
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
  constructor(private notifierService: NotifierService) {}

  addCateg(event: Event) {
    event.stopPropagation();
    const storage = localStorage.getItem('userData');
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;

    if (this.username == name) {
      if (this.question != null || this.category != null) {
        this.isAddCateg = !this.isAddCateg;
      } else {
        this.notifierService.showNotification(
          'Question Description field cannot be empty'
        );
      }
    } else {
      this.notifierService.showNotification(
        'You cannot add category to a question that is not posted by you'
      );
    }
  }

  closeCateg(categoryValue: string) {
    this.isAddCateg = false;
    this.category = categoryValue;
  }
}
