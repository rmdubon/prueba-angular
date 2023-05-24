import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { ImageInfo, MoviesPage } from '../models/movie.model';

import { catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = 'https://api.themoviedb.org/3/movie';
  apiKey = '48b338e5d6fa71e65dba06bceb767041';

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies() {
    return this.http.get<MoviesPage>(`${this.apiUrl}/popular?api_key=${this.apiKey}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError(() => new Error ('Algo falla en el servidor'));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error ('El producto no existe'));
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => new Error ('No estás autorizado'));
        }
        return throwError(() => new Error ('Ups algo salió mal'));
      })
    )
  }

  getMovieImages(movie_id: number) {
    return this.http.get<ImageInfo>(`${this.apiUrl}/${movie_id}/images?api_key=${this.apiKey}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError(() => new Error ('Algo falla en el servidor'));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error ('El producto no existe'));
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => new Error ('No estás autorizado'));
        }
        return throwError(() => new Error ('Ups algo salió mal'));
      })
    )
  }

  // getMovieGenres(movie_id: number) {
  //   return this.http.get<ImageInfo>(`${this.apiUrl}/${movie_id}/images?api_key=${this.apiKey}`)
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       if (error.status === HttpStatusCode.Conflict) {
  //         return throwError(() => new Error ('Algo falla en el servidor'));
  //       }
  //       if (error.status === HttpStatusCode.NotFound) {
  //         return throwError(() => new Error ('El producto no existe'));
  //       }
  //       if (error.status === HttpStatusCode.Unauthorized) {
  //         return throwError(() => new Error ('No estás autorizado'));
  //       }
  //       return throwError(() => new Error ('Ups algo salió mal'));
  //     })
  //   )
  // }

}
