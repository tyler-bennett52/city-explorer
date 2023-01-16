import React from "react";
import './MovieBox.css'
import Card from 'react-bootstrap/Card';

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
              <Card style={{ width: '18rem' }} key={counter}>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.posterImg}`} />
      </Card.Body>
    </Card>
            )
          })}
        </div>
      </>
    )
  }
}

export default MovieBox;