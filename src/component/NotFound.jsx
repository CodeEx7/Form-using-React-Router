import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  let navigate=useNavigate();


  return (
    <div className='not-found'>
      <button onClick={() => navigate(-1)}>Back</button>
        <h1>Error: 404 Page Not Found!!</h1><br/>
        <p>We are sorry, The page you are looking for is not available.</p>
    </div>
  )
}

export default NotFound;