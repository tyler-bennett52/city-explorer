import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Weather.css'
import WeatherDay from "../WeatherDay/WeatherDay";

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
              <WeatherDay 
              counter = {counter}
              highTemp = {day.highTemp}
              lowTemp = {day.lowTemp}
              dateTime = {day.dateTime}
              description = {day.description}
              />
          )})}
        </Accordion>

      </div>
    )
  }
}

export default Weather;