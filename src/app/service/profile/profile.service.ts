import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, retry, catchError, of } from 'rxjs';
export interface GetDetails {
  name: string;
  profileImg: string;
  desc: string;
  technology: string[];
}
export interface GetAllDetails extends GetDetails {
  email: string;
}

const urlBase: string = 'https://forum-backend-azure.vercel.app/user/';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAllDataForDescription(): Observable<GetAllDetails[]> {
    const storage = localStorage.getItem('userData');
    const token =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).access_token;
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;
    const url = `${urlBase}getUserDetails`;
    const descHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<GetAllDetails[]>(
        url,
        {
          name: name,
        },
        { headers: descHeader }
      )
      .pipe(retry(0), catchError(this.handleError));
  }

  saveAllDataofDesc(desc: string, profileImg: string, technology: string[]) {
    const storage = localStorage.getItem('userData');
    const token =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).access_token;
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;
    const url = `${urlBase}updateDetails`;
    const descHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    console.log({
      name: name,
      desc: desc,
      profileImg: profileImg,
      technology: technology,
    });
    return this.http
      .post<GetDetails[]>(
        url,
        {
          name: name,
          desc: desc,
          profileImg: profileImg,
          technology: technology,
        },
        { headers: descHeader }
      )
      .pipe(retry(0), catchError(this.handleError));
  }
  deleteUser() {
    const storage = localStorage.getItem('userData');
    const token =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).access_token;
    const name =
      storage == null
        ? ''
        : JSON.parse(localStorage.getItem('userData')!).username;
    const url = `${urlBase}deleteUser`;
    const descHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post(
        url,
        {
          username: name,
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
