import React from 'react';

function User(props) {
  const { name, surname, age, showMessage } = props;

  const handleClick = () => {
    showMessage();
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td><a href=" " onClick={handleClick}>Show message</a></td>
    </tr>
  );
}

class Task2 extends React.Component {
  state = {
    users: [
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 30 },
      { name: 'Bob', surname: 'Smith', age: 40 },
    ],
  }

  showMessage = () => {
    alert('!');
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User
                key={index}
                name={user.name}
                surname={user.surname}
                age={user.age}
                showMessage={this.showMessage}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Task2;
