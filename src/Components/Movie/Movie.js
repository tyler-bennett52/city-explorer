import React from "react";
import './Movie.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return(
      <Card className='Movie' style={{ width: '18rem' }} key={this.props.title}>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${this.props.posterImg}`} />
      </Card.Body>
    </Card>
    )
  }
}

export default Movie;