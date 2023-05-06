import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';

interface PostAQuestionInterface {
  username: string;
  question: string;
  description: string;
  problemImg: string;
  upvote: number;
}
const urlBase: string = 'https://forum-backend-azure.vercel.app/user/';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private http: HttpClient) {}

  GetAllCategories(): Observable<string[]> {
    const url = `${urlBase}fetchAllCateg`;
    return this.http
      .get<string[]>(url)
      .pipe(retry(0), catchError(this.handleError));
  }

  AddANewCateg(question: string, description: string, problemImg: string) {
    const url = `${urlBase}addCateg`;
    const storage = localStorage.getItem('userData');
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;

    return this.http
      .post<PostAQuestionInterface>(url, {
        username: name,
        question: question,
        description: description,
        problemImg: problemImg,
        upvote: 0,
      })
      .pipe(retry(0), catchError(this.handleError));
  }

  private handleError(error: Error) {
    console.log(error);
    return throwError(() => error);
  }
}
