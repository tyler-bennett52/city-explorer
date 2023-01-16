import React from "react";
import './MovieBox.css'
import Movie from "../Movie/Movie";


class MovieBox extends React.Component {
  render() {
    return (
      <>
        <h2 className="section-header">See it before you see it</h2>
        <div className="MovieBox">
          {this.props.movieData.map(movie => {
            return (
              <Movie 
              title = {movie.title}
              posterImg = {movie.posterImg}/>
            )
          })}
        </div>
      </>
    )
  }
}

export default MovieBox;