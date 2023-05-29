import { Component, Input, AfterViewInit } from '@angular/core';
import { ImageRequested, Movie, MovieCredits, MovieDetails } from 'src/app/models/movie.model';
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
  movieDetails: MovieDetails | null = null;
  movieCredits: MovieCredits | null = null;
  showCredits = false;
  creditsMessage = 'Show credits >>>';

  constructor(
    private movieService: MoviesService
  ) {}

  ngAfterViewInit(): void {
    if (this.movie.id){
      this.getMovieImagesToShow();
      this.getMovieDetailsToShow();
      this.getMovieCreditsToShow();
    }
  }

  switchShowCredits() {
    this.showCredits = !this.showCredits;
    if (!this.showCredits)
      this.creditsMessage = 'Show credits >>>';
    else
      this.creditsMessage = 'Show less <<<';
  }

  getMovieImagesToShow() {
    this.movieService.getMovieImages(this.movie.id)
    .subscribe(data => {
      // console.log(data);
      this.movieImages = data.posters.slice(0,4);
    })
  }

  getMovieDetailsToShow() {
    this.movieService.getMovieDetails(this.movie.id)
    .subscribe(data => {
      // console.log(data);
      this.movieDetails = data;
    })
  }

  getMovieCreditsToShow() {
    this.movieService.getMovieCredits(this.movie.id)
    .subscribe(data => {
      // console.log(data);
      this.movieCredits = data;
    })
  }

}
