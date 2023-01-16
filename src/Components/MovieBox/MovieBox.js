import React from "react";
import './MovieBox.css'

let counter = -1;

class MovieBox extends React.Component {
  render() {
    return (
      <>
        <h2 className="section-header">See it before you see it</h2>
        <div className="MovieBox">
          {this.props.movieData.map(movie => {
            counter++;
            return (
              <div className="movie" key={counter}>
                <h3 className="movie=title">{movie.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.posterImg}`} alt={movie.title} />
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default MovieBox;