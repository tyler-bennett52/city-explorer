import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Weather.css'

let counter = -1;

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-box">
        <h2>How About The Weather?</h2>
        <Accordion flush className="Weather" style={{ backgroundColor: 'skyblue', border: '2px black solid' }} defaultActiveKey="0">
          {this.props.weatherData.map(day => {
            counter++;
            return (
              <Accordion.Item eventKey={counter} key={counter}>
                <Accordion.Header>{day.dateTime}</Accordion.Header>
                <Accordion.Body>High: {day.highTemp} F  Low: {day.lowTemp} F, {day.description}</Accordion.Body>
              </Accordion.Item>)
          })}
        </Accordion>

      </div>
    )
  }
}

export default Weather;