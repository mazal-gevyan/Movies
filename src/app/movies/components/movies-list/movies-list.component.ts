import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMovie } from '@app/shared/interfaces/interfaces';
import { DataStoreService } from '@app/shared/services/services';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  movies: IMovie[];

  constructor(
    private dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    this.subs.add(
      this.dataStoreService.moviesSubject.subscribe(
        (movies: IMovie[]) => {
          this.movies = movies;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
