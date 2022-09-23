import './App.css';
import MainPage from './component/MainPage';
import ShowDetails from './component/ShowDetails';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, {useState} from 'react';
import NotFound from './component/NotFound'


function App() {
  const [initialData, finalData]=useState({email:"", password:"", country:"", isChecked:""});

  return (
    <Router>
    <ul>
      <li><Link to=''>LoginForm</Link><br/></li>
      <li><Link to='/showAllDetails'>ShowAll</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<MainPage initialData={initialData} finalData={finalData} />}></Route>
      <Route path="/showAllDetails" element={<ShowDetails data1={initialData}/>}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Router>    
  );
}

export default App;
