import React,{useState} from 'react'
import {auth} from "../firebase-config";
import { Redirect } from 'react-router';

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "../components/NavbarComp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import Register from './Register';

function Home() {

  const navigate = useNavigate();
    

    const studentLogin = () => {
      navigate('/login',{state:{status:'Student'}});
    }
    const startupLogin = () => {
      navigate('/login',{state:{status:'Startup'}})
    }
    const OrganizationLogin = () => {
      navigate('/login',{state:{status:'Organization'}})
    }
    const MentorLogin = () => {
      navigate('/login',{state:{status:'Mentor'}})
    }
    const InvestorLogin = () => {
      navigate('/login',{state:{status:'Investor'}})
    }

    console.log(auth.currentUser);
    if (auth.currentUser == null) {
        return (
        <>
            <button onClick={studentLogin}>Login as student</button>
            <button onClick={startupLogin}>Login as Startup</button>
            <button onClick={OrganizationLogin}>Login as Organization</button>
            <button onClick={MentorLogin}>Login as Mentor</button>
            <button onClick={InvestorLogin}>Login as Investor</button>
        </>
        )
    }
      return (
        <>
        <div>Already logged in</div>
        {/* redirect to respective dashboard */}
        </>
      )
  
}

export default Home