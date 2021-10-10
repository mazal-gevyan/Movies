import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './shared/components/page404/page404.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'secure', // 'movies',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: 'page404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }