import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GetAllProblems,
  MainPageService,
} from '../service/main-page/main-page.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  constructor(
    private router: Router,
    private mainPageService: MainPageService
  ) {}

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
  onClick() {
    console.log('clciked');
    this.router.navigate(['/question-info']);
  }

  showQuesInput(event: any) {
    this.isShown = true;
  }
  submit(event: any) {
    this.isShown = false;
  }
}
