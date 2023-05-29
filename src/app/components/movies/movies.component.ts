import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getPopularMoviesToShow();
  }

  getPopularMoviesToShow() {
    this.movieService.getPopularMovies()
    .subscribe(data => {
      // console.log(data);
      this.movies = data.results;
    })
  }

}
