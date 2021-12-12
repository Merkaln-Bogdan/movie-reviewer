import React, { Component } from "react";
import { Link } from "react-router-dom";
import FetchTVApi from "../../services/TMDBApi";
import getQueryParams from "../../utils/getQueryParams";
import SearchForm from "../SearchMovieForm/SearchMovieForm";
import styleListItem from "./StyleLIstItem.module.css";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };
  async componentDidMount() {
    await this.setState({
      query: getQueryParams(this.props.location.search)
        ? getQueryParams(this.props.location.search).query
        : "",
    });
    if (this.state.query) {
      FetchTVApi.fetchMovieyWithQuery(this.state.query).then((movies) =>
        this.setState({ movies }),
       
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      FetchTVApi.fetchMovieyWithQuery(nextQuery).then((movies) =>
        this.setState({
          movies,
          query: nextQuery,
        })
      );
    }
  }
  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    const { movies } = this.state;
  
    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />

        {movies.length > 0 && (
          <ul className={styleListItem.Contain}>
            {movies.map((movie) => (
              <li key={movie.id} className={styleListItem.ListItem}>
                <Link
                  className={styleListItem.Link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: this.props.location.pathname,
                      query: this.state.query,
                    },
                  }}
                >
                  <h3 className={styleListItem.Title}>
                    {movie.original_title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
