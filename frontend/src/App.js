import './CSS/App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import axios from "axios";
import Home from './Pages/Home';
import CheckWallet from "./Pages/CheckWallet";
import SignUP from "./Pages/Signup";
import Choose from './Pages/Choose';
import OrgLogin from "./Pages/OrganizationLogin";
import StudentLogin from "./Pages/StudentLogin";
import OrganziationSignup from './Pages/OrganizationSignup';
import OrgCheckWallet from './Pages/OrgCheckwallet';
import NFT from "./Pages/NFT";
function App() {
  useEffect(()=>{
axios.get("http://localhost:3000/").then((res)=>{
  console.log(res);
})
  });
  return (

    <div className="App">
  <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkwallet" element={<CheckWallet/>}/>
        <Route path="/signup" element={<SignUP/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path="/login/organization" element={<OrgLogin/>}/>
        <Route path="/login/student" element={<StudentLogin/>}/>
        <Route path="/org/signup" element={<OrganziationSignup/>}/>
        <Route path="/org/checkwallet" element={<OrgCheckWallet/>}/>
        <Route path="/nft" element={<NFT/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
