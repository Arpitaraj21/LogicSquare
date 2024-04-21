import React, { useState } from "react";

const EditEmployee = ({
  employees,
  editIndex,
  setIsEdit,
  editData,
  setEmployees,
}) => {
  const [name, setName] = useState(editData.name);
  const [designation, setDesignation] = useState(editData.designation);
  const [age, setAge] = useState(editData.age);
  const [available, setAvailable] = useState(true);

  const handleEditEmployee = () => {
    if (!name || !designation || !age) {
      alert("Please fill all fields");
      return;
    }

    const employee = {
      name,
      designation,
      age: parseInt(age),
      available,
    };

    const updatedEmployees = employees?.filter(
      (employee, i) => i !== editIndex
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    var existingData = updatedEmployees;
    existingData.push(employee);
    localStorage.setItem("employees", JSON.stringify(existingData));
    setEmployees(existingData);
    setIsEdit(false);
    setName("");
    setDesignation("");
    setAge("");
    setAvailable(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIsEdit(false)}>
          &times;
        </span>
        <h2>Edit Employee</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
          Available
        </label>
        <button onClick={handleEditEmployee}>Edit</button>
      </div>
    </div>
  );
};

export default EditEmployee;
