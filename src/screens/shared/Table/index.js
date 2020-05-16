import React, { useState } from "react";
import PropTypes from "prop-types";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

export default function Table({ users, setSelectedUser, selectedUser }) {
  const [sortedField, setSortedField] = useState({ c: "idUser" });
  const sortedUsers = [...users];
  if (sortedField.c !== "") {
    sortedUsers.sort((a, b) => {
      if (a[sortedField.c] < b[sortedField.c]) {
        return -1;
      }
      if (a[sortedField.c] > b[sortedField.c]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <table>
      <TableHeader
        columnsNames={["idUser", "firstName", "lastName"]}
        sortedField={sortedField}
        setSortedField={setSortedField}
      />
      <tbody>
        {sortedUsers.map((u) => (
          <TableRow
            key={u.idUser}
            user={u}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
