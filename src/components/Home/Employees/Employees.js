import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Employee from "../Employee/Employee";
import "./Employees.css";

const Employees = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/employee")
            .then((res) => res.json())
            .then((data) => setEmployee(data));
    }, []);

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center info-text mt-5 mb-3">
                    Meet Our Employees
                </h5>
                <h1 className="text-center mb-3">Our Awsome Team</h1>
                <div className="row">
                    {employee.length === 0 && (
                        <div className="text-center">
                            <Spinner
                            animation="grow"
                            variant="warning"
                            size="lg"
                        />
                        </div>
                    )}
                    {employee.map((employee) => (
                        <Employee key={employee._id} employee={employee} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Employees;