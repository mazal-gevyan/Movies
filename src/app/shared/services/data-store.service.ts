import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMovie } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {
    private _movies: BehaviorSubject<IMovie[]> = new BehaviorSubject(null);
    public readonly movies: Observable<IMovie[]> = this._movies.asObservable();
    private _categories: BehaviorSubject<string[]> = new BehaviorSubject(null);
    public readonly categories: Observable<string[]> = this._categories.asObservable();


    constructor() { }


    setMovies(movies: IMovie[]) {
        this._movies.next(movies);
    }

    get moviesSubject() {
        return this.movies;
    }

    setCategories(categories: string[]) {
        this._categories.next(categories);
    }

    get categoriesSubject() {
        return this.categories;
    }

}