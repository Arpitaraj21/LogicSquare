import React, { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployeeModal from "./AddEmployeeModal";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Load employees from local storage on component mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  // Function to add employee
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setIsAddModalOpen(false); // Close the modal after adding employee
  };

  return (
    <div className="dashboard">
      <div className="overview">
        <h2>Total Employees: {employees.length}</h2>
        <h2>
          Available Employees: {employees.filter((emp) => emp.available).length}
        </h2>
        <button onClick={() => setIsAddModalOpen(true)}>Add Employee</button>
      </div>
      <EmployeeList employees={employees} setEmployees={setEmployees} />
      {isAddModalOpen && (
        <AddEmployeeModal
          addEmployee={addEmployee}
          setIsAddModalOpen={setIsAddModalOpen}
        />
      )}
    </div>
  );
};

export default Dashboard;
