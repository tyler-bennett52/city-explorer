import React from "react";
import './Map.css'
import Card from 'react-bootstrap/Card';

class Map extends React.Component {
  render() {
    return (
      <div className="Map">
        <Card style={{ width: '100%' }}>
          <Card.Img src={this.props.mapImg} />
          <Card.Body>
            <Card.Title>{this.props.cityName}</Card.Title>
            <Card.Text>
              {this.props.cityLat}, {this.props.cityLon}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Map;