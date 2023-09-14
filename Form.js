import React, { useState } from "react";
import "./form.css";
import { useDispatch } from "react-redux";
import { addRow } from "./actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [tal, setTal] = useState("");
  const [dist, setDist] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      age.trim() !== "" &&
      gender.trim() !== "" &&
      address.trim() !== "" &&
      tal.trim() !== "" &&
      dist.trim() !== "" &&
      village.trim() !== "" &&
      pincode.trim() !== "" &&
      grade.trim() !== "" &&
      date.trim() !== ""
    ) {
      const newRow = {
        name,
        age,
        gender,
        address,
        tal,
        dist,
        village,
        pincode,
        grade,
        date,
      };

      dispatch(addRow(newRow));
      setName("");
      setAge("");
      setGender("");
      setAddress("");
      setTal("");
      setDist("");
      setVillage("");
      setPincode("");
      setGrade("");
      setDate("");
      //alert("Data submitted successfully!");
      navigate("/table");
      console.log(newRow, "newRow");
    }
  };

  return (
    <div className="custom-form">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="taluka"
          id="tal"
          value={tal}
          onChange={(e) => setTal(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Dist"
          id="Dist"
          value={dist}
          onChange={(e) => setDist(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Village"
          id="village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Pincode"
          id="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="grade"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />

        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        <br />
      </form>
    </div>
  );
};

export default Form;
