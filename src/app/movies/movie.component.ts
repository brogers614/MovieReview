import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({

  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']

})

export class MovieComponent implements OnInit {
  pageTitle: string = 'Movie List';
  imageWidth: number = 250;
  imageMargin: number = 5;
  showImage: boolean = false;
  errorMessage: string;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  filteredMovies: IMovie[];
  movies: IMovie[] = [

];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  this.movieService.getMovies().subscribe(
    movies => {this.movies = movies;
      this.filteredMovies = this.movies;
    },
    error => this.errorMessage = <any>error

  );

  }

constructor(private movieService: MovieService) {


}

  performFilter(filterby: string): IMovie[] {
    filterby = filterby.toLocaleLowerCase();

    return this.movies.filter((movie: IMovie) =>
      movie.movieName.toLocaleLowerCase().indexOf(filterby) !== -1);

  }

}

