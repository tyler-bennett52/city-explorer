import React from "react";
import './WeatherDay.css'
import Accordion from 'react-bootstrap/Accordion';


class WeatherDay extends React.Component {
  render() {
    return (
      <Accordion.Item eventKey={this.props.counter} key={this.props.dateTime}>
        <Accordion.Header>{this.props.dateTime}</Accordion.Header>
        <Accordion.Body>High: {this.props.highTemp} F  Low: {this.props.lowTemp} F, {this.props.description}</Accordion.Body>
      </Accordion.Item>
    )
  }
}

export default WeatherDay;