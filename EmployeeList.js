import React, { useState } from "react";
import EditEmployee from "./EditEmployee";

const EmployeeList = ({ employees, setEmployees }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAvailabilityChange = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].available = !updatedEmployees[index].available;
    setEmployees(updatedEmployees);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((employee, i) => i !== index);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    if (updatedEmployees.length > 0) {
      setEmployees(updatedEmployees);
    } else {
      setEmployees([]);
    }
  };

  const handleEditFunc = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    const updatedEmployees = employees.filter((employee, i) => i === index);
    setEditData(updatedEmployees[0]);
  };

  return (
    <div className="employee-list">
      {isEdit && (
        <EditEmployee
          setEmployees={setEmployees}
          employees={employees}
          editData={editData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editIndex={editIndex}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Age</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.age}</td>
              <td>
                <input
                  type="checkbox"
                  checked={employee.available}
                  onChange={() => handleAvailabilityChange(index)}
                />
              </td>
              <td>
                <button onClick={() => handleEditFunc(index)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
