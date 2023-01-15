import './App.css';
import React from 'react';
import Form from './Form';
import Map from './Map'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {city: '', mapData: false, isError: false}
  }

handleChange = (event) => {
  this.setState({city: event.target.value})
  console.log(this.state.cityLat)
}

handleSubmit = async (event) => {
  try {
    event.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`)
    let latLong = `${cityData.data[0].lat},${cityData.data[0].lon}`
    this.setState({
      cityData: cityData,
      cityName: cityData.data[0].display_name,
      cityLon: cityData.data[0].lon,
      cityLat: cityData.data[0].lat,
      mapImg: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${latLong}&zoom=18`,
      mapData: true,
      isError: false
    });
  } catch (error) {
    console.log(error)
    this.setState({mapData: false, isError: true, errorMsg: error.message})
  }
 
}

  render() {
    return (
      <div className="App">
        <h1> City Explorer</h1>
        <Form
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}/>
        {this.state.mapData === true && 
          <Map 
          cityName={this.state.cityName}
          cityLat={this.state.cityLat}
          cityLon={this.state.cityLon}
          mapImg={this.state.mapImg}
        />}
        {this.state.isError === true && 
        <p>{this.state.errorMsg}</p>}
      </div>
    );
  }
}

export default App;
