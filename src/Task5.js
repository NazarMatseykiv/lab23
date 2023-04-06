import React, { useState } from 'react';

const UserTable = ({ users, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Вік</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => onDelete(index)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Task5 = () => {
  const [users, setUsers] = useState([
    { firstName: 'Іван', lastName: 'Іванов', age: 25 },
    { firstName: 'Петро', lastName: 'Петров', age: 30 },
    { firstName: 'Марія', lastName: 'Іванова', age: 20 },
  ]);

  const deleteUser = (index) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers.splice(index, 1);
      return newUsers;
    });
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <UserTable users={users} onDelete={deleteUser} />
    </div>
  );
};

export default Task5;
