import React, { Component } from 'react';

class UserTable extends Component {
  render() {
    const { users } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class Task1 extends Component {
  state = {
    users: [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 30 },
      { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35 },
    ],
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Користувачі</h1>
        <UserTable users={users} />
      </div>
    );
  }
}

export default Task1;
