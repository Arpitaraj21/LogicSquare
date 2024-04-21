// EmployeeRow.js
import React from 'react';

const EmployeeRow = ({ employee }) => {
  const { name, designation, age, available } = employee;

  return (
    <div className="employee-row">
      <span>{name}</span>
      <span>{designation}</span>
      <span>{age}</span>
      <span>{available ? 'Available' : 'Not Available'}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default EmployeeRow;