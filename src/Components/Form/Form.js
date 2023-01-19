import React from "react";
import './Form.css'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="Form">
        <label htmlFor="city">Enter Location</label>
        <input onChange={this.props.handleChange}
          type='text' 
          placeholder="City Name"
          id="city"
          name="city" />
          <button>Explore!</button>
      </form>
    )
  }
}

export default Form;