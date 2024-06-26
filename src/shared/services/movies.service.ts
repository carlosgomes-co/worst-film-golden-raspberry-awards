import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Movies } from './movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public baseUrl = 'https://tools.texoit.com/backend-java/movies';
  public dashboardMovies: Movies = {} as Movies;
  public loading: WritableSignal<boolean> = signal(true);

  constructor(private http: HttpClient) { }

  getDashboardMovies(size: number = 206): Observable<Movies> {
    return this.http.get<Movies>(this.baseUrl, { params: { size }}).pipe(
      tap(() => this.loading.set(false)),
      map((movies: Movies) => this.dashboardMovies = movies)
    );
  }

  getListMovies(page: number = 1, size: number = 15): Observable<Movies> {
    return this.http.get<Movies>(this.baseUrl, { params: { page, size }}).pipe(
      tap(() => this.loading.set(false)),
      map((movies: Movies) => movies)
    );
  }
}
