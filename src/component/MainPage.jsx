import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowDetails from "./ShowDetails";

const Mainpage = ({initialData, finalData}) => {
  const [value, setValue] = useState(initialData);
  // console.log(initialData, "from main page");
  let navigate = useNavigate();


  const handleChange = (e) => {
    setValue((prevalue)=>({
      ...prevalue,
      [e.target.name]: e.target.value.trim(),
    }));
    finalData((prevalue)=>({
        ...prevalue,
        [e.target.name]: e.target.value.trim(),
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/showAllDetails");
  };

  return (
    <>
      <div className="main-form">
        <h1>Create Account</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} >
          <label className="main-text-id">Email:</label>
          <br />
          <input
          // autoComplete="off"
            name="email"
            type="email"
            placeholder="Email"
            value={value?.email}
            onChange={handleChange}
            className="main-input"
          />
          <br />
          <label className="main-text-id">Password:</label>
          <br />
          <input
          // autoComplete="off"
            name="password"
            type="password"
            placeholder="Password"
            value={value?.password}
            onChange={handleChange}
            className="main-input"
          />
          <br />
          <label className="main-text-id">Country:</label>
          <br />
          <input
            // autoComplete="off"
            name="country"
            type="text"
            value={value?.country}
            onChange={handleChange}
            className="main-input"
          />
          <br />
          <input name="isChecked" type="checkbox"  checked={value?.isChecked} className="check-box" onChange={handleChange}></input> I
          Accept the term of service.
          <br />
          <input type="submit" value="Submit" className="main-button"/>
        </form>
      </div>
      {value?.email?<ShowDetails empData={value}/>:null}
    </>
  );
};

export default Mainpage;
