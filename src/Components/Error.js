import React from "react";
import Alert from 'react-bootstrap/Alert';
import './Error.css'

class Error extends React.Component {
  render() {
    return (
      <Alert className="Error">{this.props.errorMsg}</Alert>
    )
  }
}

export default Error;