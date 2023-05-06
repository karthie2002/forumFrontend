import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GetAllProblems,
  MainPageService,
  PostAQuestionInterface,
} from '../service/main-page/main-page.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from '../service/notifier.service';
import { NavbarService } from '../service/navbar/navnar.service';

export interface Question {
  question: string;
  description: string;
  quesImg: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  animations: [
    trigger('slideAnimation', [
      // state(
      //   'in',
      //   style({
      //
      //   })
      // ),
      // state(
      //   'out',
      //   style({
      //     opacity: 1,
      //     height: 'auto',
      //   })
      // ),
      transition(
        'in => out',
        animate(
          '1000ms linear',
          style({ transform: 'translateY(0%)', opacity: 0.8, height: '0px' })
        )
      ),
      transition(
        'out => in',
        animate(
          '200ms linear',
          style({ transform: 'translateY(100%)', opacity: 1, height: 'auto' })
        )
      ),
    ]),
  ],
})
export class MainpageComponent implements OnInit {
  constructor(
    private router: Router,
    private mainPageService: MainPageService,
    private notifierService: NotifierService,
    private navbarService: NavbarService
  ) {}

  questionForm = new FormGroup({
    question: new FormControl(),
    description: new FormControl(),
    quesImg: new FormControl(),
  });
  questionImage: string = '';
  questionList: GetAllProblems[] = [];
  isShown: boolean = false;
  ngOnInit(): void {
    this.mainPageService
      .GetAllQuestionsForMainPage()
      .subscribe((value: GetAllProblems[]) => {
        this.questionList = value;
        this.questionList = this.questionList.reverse();
        console.log(value);
      });
  }
  onClick(item: GetAllProblems, id: number) {
    console.log('clicked');
    this.router.navigate(['/question-info', id], {
      queryParams: {
        json: JSON.stringify({ question: item.problem.question }),
      },
      queryParamsHandling: null,
    });
  }

  showQuesInput(event: any) {
    this.isShown = !this.isShown;
  }
  submitForm(event: any) {
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
    if (values.quesImg == null || values.quesImg.trim() == '') {
      values.quesImg = '';
    } else {
      values.quesImg = this.questionImage;
    }

    if (values.question != null && values.description != null) {
      this.mainPageService
        .PostAQuestion(values.question, values.description, values.quesImg)
        .subscribe((value: PostAQuestionInterface) => {
          console.log(value);
        });
    }

    let profile = '';
    this.navbarService.getUserProfile().subscribe((sample) => {
      profile = sample.profileImg;
    });
    const questionValue: GetAllProblems = {
      problem: {
        createdAt: Date.now(),
        question: values.question,
        problemImg: values.quesImg,
        description: values.description,
        upvote: 0,
      },
      userProfileImg: profile,
      username: JSON.parse(localStorage.getItem('userData')!).username,
      category: '',
    };
    this.questionList = [questionValue, ...this.questionList];
    this.isShown = false;
  }

  insertImg(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      if (
        file.size / 1048576 <= 2 &&
        (file.type.match('image/png*') ||
          file.type.match('image/jpg*') ||
          file.type.match('image/jpeg*'))
      ) {
        reader.onload = () => {
          console.log(reader.result);
          this.questionImage = reader.result as string;
        };
      } else {
        if (file.size / 1048576 > 2) {
          this.notifierService.showNotification('Image size cannot exceed 2MB');
        } else {
          this.notifierService.showNotification(
            'Image type should be JPEG/PNG'
          );
        }
      }
    }
  }
}
