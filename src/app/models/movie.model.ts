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

export interface MovieDetails {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

export interface MovieCredits {
  id:   number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          string;
  job?:                 string;
}

