import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './container/movies.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    MoviesComponent,
    CategoriesComponent,
    MoviesListComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
