import React, { Component, Suspense, lazy } from "react";
import FetchTVApi from "../../services/TMDBApi";
import { NavLink, Route, Switch } from "react-router-dom";
import styleMovieDetails from "./MoviesDetailsPage.module.css";
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
    loading: false,
    from: "",
    query: "",
  };
  componentDidMount() {
    const idMovie = this.props.match.params.movieId;
    FetchTVApi.fetchShowDetails(idMovie).then((movie) =>
      this.setState({
        movie,
        from: this.props.location.state ? this.props.location.state.from : "",
        query: this.props.location.state ? this.props.location.state.query : "",
      })
    );
    FetchTVApi.fetchMovieCast(idMovie).then((cast) => this.setState({ cast }));
    FetchTVApi.fetchMovieReviews(idMovie).then((reviews) =>
      this.setState({ reviews })
    );
  }

  render() {
    const { cast, reviews, movie } = this.state;
    console.log(reviews);
    return (
      <div>
        <button
          className={styleMovieDetails.ButtonBack}
          type="button"
          onClick={() =>
            this.state.from
              ? this.props.history.push({
                  pathname: this.state.from,
                  search: `query=${this.state.query}`,
                  state: { query: this.state.query },
                })
              : this.props.history.push("/")
          }
        >
          Back
        </button>
        {this.state.movie && (
          <div className={styleMovieDetails.Poster}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.original_title}</h2>
          </div>
        )}
        <div className={styleMovieDetails.Details}>
          <NavLink
            className={styleMovieDetails.Cast}
            to={{
              pathname: `${this.props.match.url}/cast`,
              state: { from: this.props.location },
            }}
          >
            Cast
          </NavLink>

          <NavLink
            className={styleMovieDetails.Reviews}
            to={{
              pathname: `${this.props.match.url}/reviews`,
              state: { from: this.props.location },
            }}
          >
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<h2>loading...</h2>}>
          <Switch>
            <Route
              path={`${this.props.match.url}/cast`}
              exact
              render={() => <Cast cast={cast} />}
            />
            <Route
              path={`${this.props.match.url}/reviews`}
              exact
              render={() => <Reviews reviews={reviews} />}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
export default MovieDetailsPage;
