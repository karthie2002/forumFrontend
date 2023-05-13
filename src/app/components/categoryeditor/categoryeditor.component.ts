import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  AddCategory,
  QuestionService,
} from 'src/app/service/main-page/question.service';

@Component({
  selector: 'app-categoryeditor',
  templateUrl: './categoryeditor.component.html',
  styleUrls: ['./categoryeditor.component.scss'],
})
export class CategoryeditorComponent {
  @Input() question: string = '';
  @Input() username: string = '';
  @Output() newEvent = new EventEmitter<boolean>();

  constructor(private questionService: QuestionService) {}
  addCategForm = new FormGroup({
    category: new FormControl(),
  });

  submitCateg(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const categoryName: string = JSON.parse(
      JSON.stringify(this.addCategForm.value.category)
    );
    console.log('submit', categoryName, this.question);
    this.newEvent.emit(true);
    this.questionService
      .AddQuestionToCategory(this.question, categoryName)
      .subscribe((value: AddCategory) => {
        console.log(value);
      });
  }
}
