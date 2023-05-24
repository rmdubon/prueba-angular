import { Component, Input, AfterViewInit } from '@angular/core';
import { ImageRequested, Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements AfterViewInit {

  @Input() movie: Movie = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: null,
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }
  movieImages: ImageRequested[] = [];

  constructor(
    private movieService: MoviesService
  ) {}

  ngAfterViewInit(): void {
    this.movieService.getMovieImages(this.movie.id)
    .subscribe(data => {
      console.log(data)
      this.movieImages = data.posters;
    })
  }

}
