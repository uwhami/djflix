import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResult: null,
    searchTerm: null,
    loading: true,
    error: null,
  };
  render() {
    const { movieResults, tvResult, searchTerm, loading, error };
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResult={tvResult}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
