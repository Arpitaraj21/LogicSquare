import React, { useState } from 'react';

const AddEmployeeModal = ({ addEmployee, setIsAddModalOpen }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [age, setAge] = useState('');
  const [available, setAvailable] = useState(true);

  const handleAddEmployee = () => {
    if (!name || !designation || !age) {
      alert('Please fill all fields');
      return;
    }

    const employee = {
      name,
      designation,
      age: parseInt(age),
      available
    };

    addEmployee(employee);
    setName('');
    setDesignation('');
    setAge('');
    setAvailable(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIsAddModalOpen(false)}>&times;</span>
        <h2>Add Employee</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <label>
          <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
          Available
        </label>
        <button onClick={handleAddEmployee}>Add</button>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
