import React, { Component } from "react";
import searchStyle from "./Searchmovie.module.css";
export default class SearchForm extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <form className={searchStyle.SearchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={this.state.value}
          onChange={this.handleChange}
          className={searchStyle.SearchField}
        />
        <button className={searchStyle.SearchButton}>Search</button>
      </form>
    );
  }
}
