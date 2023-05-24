export interface MoviesPage {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date | null;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

// export enum OriginalLanguage {
//   En = "en",
//   Fi = "fi",
//   Fr = "fr",
//   Zh = "zh",
// }

export interface ImageInfo {
  backdrops: ImageRequested[];
  id:        number;
  logos:     any[];
  posters:   ImageRequested[];
}

export interface ImageRequested {
  aspect_ratio: number;
  height:       number;
  iso_639_1:    null | string;
  file_path:    string;
  vote_average: number;
  vote_count:   number;
  width:        number;
}
