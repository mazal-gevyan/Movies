import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from './api.routes';
import { IMovie, IMoviesResponse } from '@app/shared/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(ApiRoutes.LOGIN, { username, password});
  }

  getMovies(): Observable<IMoviesResponse> {
    return this.http.post<IMoviesResponse>(ApiRoutes.MOVIES, null);
  }

  addMovie(movie: IMovie): Observable<any> {
    return this.http.post<any>(ApiRoutes.ADD_MOVIE, { movie});
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.post<any>(ApiRoutes.DELETE_MOVIE, { id});
  }

}