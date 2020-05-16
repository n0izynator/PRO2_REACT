import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = () => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const deleteUser = () => {
    setUsers(users.filter((user) => user.idUser !== selectedUser.idUser));
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={addUser} className="btn">
            Dodaj użytkownika
          </button>
          <button
            type="button"
            onClick={deleteUser}
            className="btn red darken-4"
          >
            Usuń użytkownika
          </button>
        </div>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
      </div>
    </>
  );
}
