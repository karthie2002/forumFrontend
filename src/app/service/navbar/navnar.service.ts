import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { retry, catchError, of, Observable } from 'rxjs';
export interface GetUserProfileInterface {
  profileImg: string;
}
const urlBase: string = 'https://forum-backend-azure.vercel.app/user/';
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private http: HttpClient) {}
  getUserProfile():Observable<GetUserProfileInterface> {
    const url = `${urlBase}fetchUserProfile`;
    const storage = localStorage.getItem('userData');
    const token =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).access_token;
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;
    const descHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<GetUserProfileInterface>(
        url,
        {
          name: name,
        },
        { headers: descHeader }
      )
      .pipe(retry(0), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    return of(error.error.message);
  }
}
