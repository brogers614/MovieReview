import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';




@Component({

  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  pageTitle: string = 'Movie Detail';
  movie: IMovie;

constructor(private route: ActivatedRoute, private router: Router) {

}


  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`


this.movie = {
   "movieId": id,
"movieName": "Ready Player One",
"releaseDate": "May 21, 2016",
"description": "Curved claw steel hammer",
"rating": "PG-13",
"starRating": 4.8,
"imageUrl": "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SY1000_CR0,0,674,1000_AL_.jpg"}

  }

  onBack(): void {
    this.router.navigate(['/movies']);

  }

}
