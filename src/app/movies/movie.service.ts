import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IMovie } from './movie';




@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieURL = 'api/movies/movies.json';

  constructor (private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieURL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {

    let errrorMessage = '';
    if (err.error  instanceof ErrorEvent) {
      errrorMessage = `An error Occiured:  ${err.error.message}`;
    } else {
      errrorMessage = `Server reuturned coe; ${err.status}, error message is:  ${err.message}`;
    }
    console.log(errrorMessage);
    return throwError(errrorMessage);
  }

 }
