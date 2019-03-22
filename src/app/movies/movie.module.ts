import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailGuard } from './movie-detail.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
{ path: 'movies/:id', canActivate: [MovieDetailGuard], component: MovieDetailComponent},

];

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MovieModule { }
