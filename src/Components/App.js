import React, { Component } from "react";
import axios from "axios";
import User from "./User";
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
    const users = this.state.data;
    return (
      <div>
        {users.map(user => (
          <User
            img={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
          />
        ))}
      </div>
    );
  }
}

export default App;
