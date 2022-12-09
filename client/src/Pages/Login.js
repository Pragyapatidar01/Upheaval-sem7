import React,{useState} from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {signInWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
import {auth} from "../firebase-config";
import {useLocation} from 'react-router-dom';

const Login = () => {

const location = useLocation();
const navigate = useNavigate();

const [loginEmail, setLoginEmail] = useState("");
const [loginPass, setLoginPass] = useState("");

const[user,setUser] = useState({});

// send loginEmail from here to server.js


onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
})

const login = async () => {
    try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPass);
        console.log(user);
        // console.log(location.state.status);
        // if(location.state.status == 'Student')
        navigate('/studentHome');

    } catch(err) {
        console.log(err.message);
    }

};

const logout = async () => {
    await signOut(auth);
    console.log("signed Out");
}

  return (
    <>
    <main className="d-flex align-items-center banner-background p-5 mt-5" style={{backgroundColor:"#f5f5f5"}}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4 offset-md-4">
                              <div className="loginForm">
                              <div className="loginCard">
                            <div className="card-header  text-center" style={{backgroundColor:"black"}}>
                                <br/>
                                <h3 style={{color:"#f5f5f5"}}>Login here</h3>
                            </div>
                                <div className="m-4">
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" name="email" required className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => {setLoginEmail(event.target.value);
                                        }}/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group mt-2" style={{position: "relative"}} >
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" required className="form-control mt-2" id="PasswordField" placeholder="Password" onChange={(event) => {setLoginPass(event.target.value);
                                        }}/>
                                    </div>
                                    <div className="container text-center pb-4">
                                        <p><span style={{color: "#888888"}}>If not registered,</span> <Link to="/register">Click Here</Link></p>
                                    <button className="btn btn-dark btn-lg mt-3" onClick={login}>Submit</button>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                          </main>
    {/* <div>
    <h3>Login</h3>
        <input placeholder="Email" 
        onChange={(event) => {
            setLoginEmail(event.target.value);
        }}
        />
        <input placeholder="Password" 
        onChange={(event) => {
            setLoginPass(event.target.value);
        }}
        />
        <button onClick={login}>Login</button>
    </div>
        <p className="mt-2">
              Don't have an account? <Link to="/register">Register</Link>
        </p>
     {user?.email}
     <button onClick={logout}>Sign Out</button> */}
    </>
  )
}

export default Login