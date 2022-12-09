import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {auth} from "../firebase-config";

function SubmitSolution() {

  const navigate = useNavigate();

  const [flag, setFlag] = useState(0);

  const [sol,setSol] = useState({
    PSid:"", solDesc:"", techStack:"", demoLink:"", videoLink:"", repoLink:""
  })

  const userEmail = auth.currentUser.email;
  let name,value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setSol({...sol, [name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();

    const { PSid, solDesc, techStack, demoLink, videoLink, repoLink } = sol;

    const res = await fetch('/PSsolution', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        userEmail, PSid, solDesc, techStack, demoLink, videoLink, repoLink
      })
    });

    const data = await res.json();
    console.log(data);
    if(!data){ 
      console.log("Failed-2");
    }else{
      console.log("Data sent-2");
      navigate('/ideas'); 
    }
  }

  // const switchChangeHandler = (e) => {
  //   if (flag == 0) setFlag(1);
  //   else setFlag(0);
  //   // console.log(flag)
  // };

  return (
    <>
    <Sidebar />
    <div className="home">
      <div className="cardss" style={{ paddingTop: "6rem" }}>
        <Form>
        <div className="form pt-5">
          
          <h2 style={{ marginBottom: "20px" }}>Idea Details</h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>PSid</Form.Label>
            <Form.Control type="text" placeholder="Enter PS Id" name="PSid" 
            value = {sol.PSid}
            onChange={handleInputs} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Solution Description</Form.Label>
            <Form.Control as="textarea" name="solDesc"
            value = {sol.solDesc}
            onChange={handleInputs}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tech Stack</Form.Label>
            <Form.Control as="textarea" name="techStack"
            value = {sol.techStack}
            onChange={handleInputs} />
          </Form.Group>


          <hr></hr>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Submit Your PPT/PDF</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <hr></hr>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Prototype Demo Link</Form.Label>
            <Form.Control type="text" placeholder="Demo Link" name="demoLink"
            value = {sol.demoLink}
            onChange={handleInputs} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Video Link</Form.Label>
            <Form.Control type="text" placeholder="Video Link" name="videoLink"
            value = {sol.videoLink}
            onChange={handleInputs} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Repository Link</Form.Label>
            <Form.Control type="text" placeholder="Repository Link" name="repoLink"
            value = {sol.repoLink}
            onChange={handleInputs} />
          </Form.Group>
          
          <h2 style={{ marginTop: "42px", marginBottom: "20px" }}>
            Acknowledgement
          </h2>
          <hr></hr>
          <Form.Check
            style={{ marginTop: "30px", marginBottom: "30px" }}
            type={"checkbox"}
            id={`default-checkbox`}
            label={`I accept that the provided information is solely mine and not copied from other ideas.`}
          />

          <Button type="submit" onClick={postData}>Submit</Button>
        </div>
        </Form>
      </div>
    </div>
    </>
  );
}

export default SubmitSolution;
