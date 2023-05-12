import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

export interface AddCategory {
  username: string;
  question: string;
  categName: string;
}
const urlBase: string = 'https://forum-backend-azure.vercel.app/user/';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  AddQuestionToCategory(question: string, categName: string) {
    const url = `${urlBase}addCateg`;
    const storage = localStorage.getItem('userData');
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;

    console.log({
      username: name,
      question: question,
      categName: categName,
    });
    return this.http
      .post<AddCategory>(url, {
        name: name,
        question: question,
        categName: categName,
      })
      .pipe(retry(0), catchError(this.handleError));
  }

  private handleError(error: Error) {
    console.log(error);

    return throwError(() => error);
  }
}
