import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = "397770e0fb0a40efbd7d9315fa828fa8";

function fetchTrendingMovie() {
  return axios
    .get(
      `${baseUrl}trending/all/day?api_key=${API_KEY}&language=en-US&include_adult=false`
    )
    .then((response) => response.data.results);
}
function fetchMovieyWithQuery(query) {
  return axios
    .get(
      `${baseUrl}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
}

function fetchShowDetails(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => response.data);
}
function fetchMovieCast(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    .then((response) => response.data.cast);
}
function fetchMovieReviews(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => response.data.results);
}
export default {
  fetchTrendingMovie,
  fetchMovieyWithQuery,
  fetchShowDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
