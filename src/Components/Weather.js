import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Weather.css'

class Weather extends React.Component {
  render() {
    return (
      <div>
        <h2>How About The Weather?</h2>
        <Accordion flush='true' style={{width: '50%', margin: '0 auto', backgroundColor: 'blanchedalmond'}}defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{backgroundColor: 'blanchedalmond'}}>{this.props.weatherDateOne}</Accordion.Header>
            <Accordion.Body style={{backgroundColor: 'blanchedalmond'}}>{this.props.weatherTypeOne}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{this.props.weatherDateTwo}</Accordion.Header>
            <Accordion.Body>{this.props.weatherTypeTwo}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{this.props.weatherDateThree}</Accordion.Header>
            <Accordion.Body>{this.props.weatherTypeThree}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    )
  }
}

export default Weather;