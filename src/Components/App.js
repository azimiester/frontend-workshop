import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(`https://reqres.in/api/users`).then(response => {
      this.setState({ data: response.data.data });
    });
  }
  render() {
    return <div>{JSON.stringify(this.state.data)}</div>;
  }
}

export default App;
