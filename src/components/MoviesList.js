import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;
    const { imdbID, Title, Year, Poster } = movies;
    return (
      <div className="MoviesList">
        {movies.map((movie) => {
          return (
            <div key={imdbID} className="MovieList-item">
              <Movie id={imdbID} title={Title} year={Year} poster={Poster} />
            </div>
          );
        })}
      </div>
    );
  }
}
