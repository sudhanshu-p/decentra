import React from 'react';
import '../CSS/Choose.css';
import studentImg from '../assets/images/student.gif';
import orgImg from '../assets/images/org.gif';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  return (
    <div className="Choose-container">
      <h1 className='Choose-h1'></h1>
      <div className="Choose-box-container">
        <div className="Choose-box Choose-student" onClick={() => {
          navigate("/login/student");
        }}>
          <img src={studentImg} alt="Student" className='Choose-img' />
          <p>Student</p>
        </div>
        <div className="Choose-box Choose-organization" onClick={() => {
          navigate("/login/organization");
        }}>
          <img src={orgImg} alt="Organization" className='Choose-img' />
          <p>Organization</p>
        </div>
      </div>
    </div>
  );
}

export default App;
