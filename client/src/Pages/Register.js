import React,{useState} from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import {Link, Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import {auth} from "../firebase-config";

const Register = () => {

const navigate = useNavigate();
const location = useLocation();

const [registerEmail, setRegisterEmail] = useState("");
const [registerPass, setRegisterPass] = useState("");


const[user,setUser] = useState({});

onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
})
const register = async () => {
    try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPass);
        console.log(user);
        // console.log(location.state.status);
        // const status = location.state.status;
        // createUserDocument(user, {status});
        navigate('/studentHome'); 
    } catch(err) {
        console.log(err.message);
    }
};

const logout = async () => {
    await signOut(auth);
}

  return (
    <main className="d-flex align-items-center banner-background p-5 mt-5" style={{backgroundColor:"#f5f5f5"}}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4 offset-md-4">
                              <div className="loginForm">
                              <div className="loginCard">
                            <div className="card-header  text-center" style={{backgroundColor:"black"}}>
                                <br/>
                                <h3 style={{color:"#f5f5f5"}}>Register here</h3>
                            </div>
                                <div className="m-4">
                                    <div class="form-group">
                                        <label for="user_name">UserName<span style={
                                            {color:"#FF0800", fontSize:"20px"}}>*</span></label>
                                        <input name="user_name" type="text" class="form-control" id="user_name" aria-describedby="emailHelp" placeholder="Enter username" />
                                        <div id="error-username"></div>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label >Email address<span style={
                                            {color:"#FF0800", fontSize:"20px"}}>*</span></label>
                                        <input type="email" name="email" required className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => {setRegisterEmail(event.target.value);
                                        }}/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group mt-2" style={{position: "relative"}} >
                                        <label for="exampleInputPassword1">Password<span style={
                                            {color:"#FF0800", fontSize:"20px"}}>*</span></label>
                                        <input type="password" name="password" required className="form-control mt-2" id="PasswordField" placeholder="Password" onChange={(event) => {setRegisterPass(event.target.value);
                                        }}/>
                                    </div>
                                    <div className="container text-center pb-4">
                                        <p><span style={{color: "#888888"}}>If already registered,</span> <Link to="/">Click Here</Link></p>
                                    <button className="btn btn-dark btn-lg mt-3" onClick={register}>Submit</button>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                          </main>
    // <div>
    // <div>
    //     <h3> Register User</h3>
    //     <input placeholder="Email" 
    //     onChange={(event) => {
    //         setRegisterEmail(event.target.value);
    //     }}
    //     />
    //     <input placeholder="Password" 
    //     onChange={(event) => {
    //         setRegisterPass(event.target.value);
    //     }}
    //     />
    //     <button onClick={register}>Create User</button>
    // </div>
    //     <p className="mt-2">
    //           Already have account? <Link to="/login">Login</Link>
    //     </p>
    // {user?.email}
    // <button onClick={logout}>Sign Out</button>
    // </div>
  )
}

export default Register









// import React, { Component } from "react";
// import {
//   Navbar,
//   Nav,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
//   Container,
// } from "react-bootstrap";
// import "../App.css";
// import  { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Link, Routes, Route, useNavigate} from 'react-router-dom';
// import RegisterForm from "./RegisterForm";

// function LoginComp() {
  

//   return (
    
       
//                         <main className="d-flex align-items-center banner-background p-5" style={{backgroundColor:"#f5f5f5"}}>
//                           <div className="container">
//                             <div className="row">
//                               <div className="col-md-4 offset-md-4">
//                               <div className="loginForm">
//                               <div className="loginCard">
//                             <div className="card-header  text-center" style={{backgroundColor:"black"}}>
//                                 <br/>
//                                 <h3 style={{color:"#f5f5f5"}}>Login here</h3>
//                             </div>
//                                 <form className="m-4">
//                                     <div className="form-group">
//                                         <label >Email address</label>
//                                         <input type="email" name="email" required className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                                     </div>
//                                     <div className="form-group mt-2" style={{position: "relative"}} >
//                                         <label for="exampleInputPassword1">Password</label>
//                                         <input type="password" name="password" required className="form-control mt-2" id="PasswordField" placeholder="Password" />
//                                     </div>
//                                     <div className="container text-center pb-4">
//                                         <p><span style={{color: "#888888"}}>if not registered,</span> <Link to="/RegisterForm">Click Here</Link></p>
//                                     <button type="submit" className="btn btn-dark btn-lg mt-3">Submit</button>
//                                     </div>
//                                 </form>
//                                 </div>
//                                 </div>
//                                 </div>
//                                 </div>
//                                 </div>
//                           </main>
                            
                       
//   );
// }
// export default LoginComp;