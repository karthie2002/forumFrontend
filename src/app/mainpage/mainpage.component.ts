import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  GetAllProblems,
  MainPageService,
} from '../service/main-page/main-page.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from '../service/notifier.service';

export interface Question {
  question: string;
  description: string;
  quesImg: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  constructor(
    private router: Router,
    private mainPageService: MainPageService,
    private notifierService: NotifierService,
    private route: ActivatedRoute
  ) {}

  questionForm = new FormGroup({
    question: new FormControl(),
    description: new FormControl(),
    quesImg: new FormControl(),
  });

  questionList: GetAllProblems[] = [];
  isShown: boolean = false;
  ngOnInit(): void {
    this.mainPageService
      .GetAllQuestionsForMainPage()
      .subscribe((value: GetAllProblems[]) => {
        this.questionList = value;
        console.log(value);
      });
  }
  onClick(item: GetAllProblems, id: number) {
    console.log('clciked');
    this.router.navigate(['/question-info', id], {
      queryParams: {
        json: JSON.stringify({ question: item.problem.question }),
      },
      queryParamsHandling: null,
    });
  }

  showQuesInput(event: any) {
    this.isShown = true;
  }
  submit(event: any) {
    event.preventDefault();
    const values: Question = JSON.parse(
      JSON.stringify(this.questionForm.value)
    );
    console.log(values);
    if (values.question == null || values.question.trim() == '') {
      this.notifierService.showNotification('Question field cannot be empty');
    }
    if (values.description == null || values.question.trim() == '') {
      this.notifierService.showNotification(
        'Question Description field cannot be empty'
      );
    }
    if (values.quesImg == null || values.question.trim() == '') {
      this.notifierService.showNotification(
        'Question Image field cannot be empty'
      );
    }
    this.isShown = false;
  }
}
