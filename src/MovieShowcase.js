import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => <MovieCard movie={movie}/>)
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    console.log(movieData)
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
