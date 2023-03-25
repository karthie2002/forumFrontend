import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

export interface GetAllProblems {
  problem: {
    createdAt: number;
    question: string;
    problemImg: string;
    description: string;
    upvote: number;
  };
  userProfileImg: string | null;
  username: string | null;
  category: string | null;
  //   [{
  //     problem: {
  //       createdAt: 1679329565585,
  //       question: 'dummy',
  //       problemImg: '',
  //       description: 'fool',
  //       upvote: 0,
  //     },
  //     userProfileImg: '',
  //     username: 'Unknown',
  //   }];
}

const urlBase: string = 'https://forum-backend-azure.vercel.app/problem/';
@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(private http: HttpClient) {}

  GetAllQuestionsForMainPage(): Observable<GetAllProblems[]> {
    const url = `${urlBase}fetchAllProblems`;

    return this.http
      .get<GetAllProblems[]>(url)
      .pipe(retry(0), catchError(this.handleError));
  }

  private handleError(error: Error) {
    console.log(error);

    return throwError(() => error);
  }
}
