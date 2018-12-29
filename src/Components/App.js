import React, { Component } from "react";
import axios from "axios";
import User from "./User";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitleredUsers: [],
      allUsers: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    axios.get(`https://reqres.in/api/users`).then(response => {
      this.setState({
        fitleredUsers: response.data.data,
        allUsers: response.data.data
      });
    });
  }
  onChange(event) {
    const value = event.target.value;
    if (value == "") {
      this.setState({ fitleredUsers: this.state.allUsers });
      return;
    }
    const users = this.state.fitleredUsers;
    const fitleredUsers = users.filter(user => {
      const name = `${user.first_name} ${user.last_name}`;
      return name.includes(value);
    });
    this.setState({ fitleredUsers });
  }
  render() {
    const users = this.state.fitleredUsers;
    return (
      <div>
        <input placeholder="Search users" onChange={this.onChange} />
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
