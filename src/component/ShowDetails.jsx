import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowDetails = ({data1}) => {
  let navigate=useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
        <h1>Show Details!!</h1>
        <p>{data1?.email}</p>
        <p>{data1?.country}</p>
    </div>
  )
}

export default ShowDetails;