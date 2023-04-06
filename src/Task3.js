import React from 'react';

class User extends React.Component {
  handleClick = () => {
    this.props.showMessage(this.props.name);
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.age}</td>
        <td>
          <a href=" " onClick={this.handleClick}>
            Show name
          </a>
        </td>
      </tr>
    );
  }
}

class Task3 extends React.Component {
  showMessage = (name) => {
    alert(name);
  };

  render() {
    const users = this.props.users.map((user, index) => (
      <User
        key={index}
        name={user.name}
        surname={user.surname}
        age={user.age}
        showMessage={this.showMessage}
      />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{users}</tbody>
      </table>
    );
  }
}

export default Task3;
