// src/components/Table.js
import React from "react";
import "./table.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteRow } from "./actions";

const Table = ({ rows }) => {
  const tableData = useSelector((state) => state.tableData);
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h2>Student Data Table</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Taluka</th>
            <th>District</th>
            <th>Village</th>
            <th>Pincode</th>
            <th>Grade</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.address}</td>
              <td>{row.tal}</td>
              <td>{row.dist}</td>
              <td>{row.village}</td>
              <td>{row.pincode}</td>
              <td>{row.grade}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={goBack}>
        Back
      </button>
    </>
  );
};

export default Table;
