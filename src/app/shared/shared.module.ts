import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { Page404Component } from './components/page404/page404.component';
import { CardComponent } from './components/card/card.component';
import { MovieFormDialogComponent } from './components/movie-form-dialog/movie-form-dialog.component';

const modules: any[] = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  MaterialModule,
]

const components: any[] = [
  Page404Component,
  CardComponent,
  MovieFormDialogComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule {}
