import React, { Component } from 'react';

class User extends Component {
  handleClick = () => {
    this.props.showMessage(this.props.index);
  };

  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.age}</td>
        <td>
          <button onClick={this.handleClick}>Show</button>
        </td>
      </tr>
    );
  }
}

class Task4 extends Component {
  state = {
    users: [
      { firstName: 'John', lastName: 'Doe', age: 25 },
      { firstName: 'Jane', lastName: 'Doe', age: 32 },
      { firstName: 'Bob', lastName: 'Smith', age: 47 },
    ],
  };

  showMessage = (index) => {
    alert(`User ${index + 1}`);
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Show User</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <User
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                showMessage={this.showMessage}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Task4;
