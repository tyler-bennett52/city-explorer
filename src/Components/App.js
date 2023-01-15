import './App.css';
import React from 'react';
import Form from './Form';
import Map from './Map';
import axios from 'axios';
import Error from './Error';
import Weather from './Weather';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {city: '', mapData: false, isError: false, weatherResponse: false}
  }

handleChange = (event) => {
  this.setState({city: event.target.value})
  console.log(this.state.cityLat)
}


// REFACTOR JUST SAVE WEATHER DATA AND BREAK IT DOWN LATER
getWeather = async (lat, lon) => {
try {
  let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}`)
  console.log(weatherData.data);
  this.setState({
    weatherData: weatherData.data,
    weatherResponse: true
   })
} catch (error) {
  this.setState({isError: true, errorMsg: error.message})
}
}

handleSubmit = async (event) => {
  try {
    event.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`)
    // let myServerLatLong = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}&city_name=${this.state.city}`)
    let latLong = `${cityData.data[0].lat},${cityData.data[0].lon}`
    this.setState({
      cityData: cityData,
      cityName: cityData.data[0].display_name,
      cityLon: cityData.data[0].lon,
      cityLat: cityData.data[0].lat,
      mapImg: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${latLong}&zoom=18`,
      mapData: true,
      isError: false
    }); this.getWeather();

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
          <Error
       errorMsg={this.state.errorMsg} />}
       {this.state.weatherResponse === true && 
       <Weather
        weatherData={this.state.weatherData}
        />
       }
      </div>
    );
  }
}

export default App;
