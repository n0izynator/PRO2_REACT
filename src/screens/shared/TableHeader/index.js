import React from "react";
import PropTypes from "prop-types";

export default function TableHeader({
  columnsNames,
  sortedField,
  setSortedField,
}) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c}>
            <button
              type="button"
              className={
                sortedField.c === c
                  ? "btn  green lighten-2"
                  : "btn  light-blue lighten-2"
              }
              onClick={() => setSortedField({ c })}
            >
              {c}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortedField: PropTypes.shape({ c: PropTypes.string }).isRequired,
  setSortedField: PropTypes.func.isRequired,
};
