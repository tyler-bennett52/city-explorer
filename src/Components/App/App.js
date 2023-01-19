import './App.css';
import React from 'react';
import Form from '../Form/Form';
import Map from '../Map/Map';
import axios from 'axios';
import Error from '../Error/Error'
import Weather from '../Weather/Weather';
import MovieBox from '../MovieBox/MovieBox';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { city: '', mapData: false, isError: false, weatherResponse: false, movieResponse: false }
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value })
    console.log(this.state.cityLat)
  }

  getWeather = async (lat, lon) => {
    try {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}&lat=${lat}&lon=${lon}`)
      console.log(weatherData.data);
      this.setState({
        weatherData: weatherData.data,
        weatherResponse: true
      })
    } catch (error) {
      this.setState({ isError: true, errorMsg: error.message + " Weather API" })
    }
  }

  getMovies = async (cityName) => {
    try {
      let justCityName = cityName.slice(0, cityName.indexOf(','))
      console.log(justCityName)
      let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?city_name=${justCityName}`);
      console.log(movieData);
      this.setState({ movieData: movieData.data, movieResponse: true })
    } catch (error) {
      this.setState({ isError: true, errorMsg: error.message + " Movie API" })
    }
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
      this.getWeather(cityData.data[0].lat, cityData.data[0].lon);
      this.getMovies(cityData.data[0].display_name)

    } catch (error) {
      console.log(error)
      this.setState({ mapData: false, isError: true, errorMsg: error.message + " Location API" })
    }

  }

  render() {
    return (
      <div className="App">
        <h1> City Explorer</h1>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
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
        {this.state.movieResponse && <MovieBox movieData={this.state.movieData} />}
      </div>
    );
  }
}

export default App;
