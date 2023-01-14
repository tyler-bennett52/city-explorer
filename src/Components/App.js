import './App.css';
import React from 'react';
import Form from './Form';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {city: ''}
  }

handleChange = (event) => {
  this.setState({city: event.target.value})
}

handleSubmit = async (event) => {
event.preventDefault();
let cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`)
console.log(cityData.data[0].display_name)
this.setState({cityData: cityData.data[0], cityName: cityData.data[0].display_name})
}

  render() {
    return (
      <div className="App">
        <h1> City Explorer</h1>
        <Form
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
        />
        <section>{this.state.cityName}</section>
      </div>
    );
  }
}

export default App;
