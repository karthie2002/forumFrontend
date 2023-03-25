import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private mainPageService: MainPageService,
    private route: ActivatedRoute
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
  onClick(item: GetAllProblems, id: number) {
    console.log('clciked');
    this.router.navigate(['/question-info', id], {
      queryParams: { json: JSON.stringify(item) },
      queryParamsHandling: null,
    });
  }

  showQuesInput(event: any) {
    this.isShown = true;
  }
  submit(event: any) {
    this.isShown = false;
  }
}
