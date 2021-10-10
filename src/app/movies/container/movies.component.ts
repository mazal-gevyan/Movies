import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMovie, IMoviesResponse } from '@app/shared/interfaces/interfaces';
import { ApiService, DataStoreService } from '@app/shared/services/services';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  constructor(private apiService: ApiService,
    private dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.subs.add(
      this.apiService.getMovies().subscribe(
        (res: IMoviesResponse) => {
          if (!res.isError && res?.data) {
            this.dataStoreService.setMovies(res?.data);
            this.filterCategories(res?.data);
          }
        },
        (err) => {
          console.error(`response error ${err}`);
        }
      )
    );
  }

  filterCategories(data: IMovie[]){
    const categories: string[] = data.map(item => item.category);
    console.log({ categories});
    
    this.dataStoreService.setCategories(categories);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
