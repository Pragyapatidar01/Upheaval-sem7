import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import LinkSection from "../components/LinkSection";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import {auth} from "../firebase-config";


function NewIdea() {

  const navigate = useNavigate();

  const [flag, setFlag] = useState(0);
  const [idea,setIdea] = useState({
    title:"", desc:"", techStack:"", domain:"", demoLink:"", videoLink:"", repoLink:""
  });

  const userEmail = auth.currentUser.email;
  let name,value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setIdea({...idea, [name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();

    const { title, desc, techStack, domain, demoLink, videoLink, repoLink} = idea;

    const res = await fetch('/newIdea', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        userEmail, title, desc, techStack, domain, demoLink, videoLink, repoLink
      })
    });

    const data = await res.json();
    console.log(data);
    if(!data){
      console.log("Failed");
    }else{
      console.log("Data sent");
      navigate('/ideas'); 
    }
  }

  // const switchChangeHandler = (e) => {
  //   if (flag == 0) setFlag(1);
  //   else setFlag(0);
  // };

  return (
    <>
    <Sidebar />
    <div className="home">
      <div className="cardss">
        <Form>
        <div className="form pt-5"> 

          <h2 style={{ marginBottom: "20px" }}>Idea Details</h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Idea Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Title" name="title" 
            value = {idea.title}
            onChange={handleInputs} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Idea Description</Form.Label>
            <Form.Control as="textarea" name="desc"
            value = {idea.desc}
            onChange={handleInputs}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tech Stack</Form.Label>
            <Form.Control as="textarea" name="techStack"
            value = {idea.techStack}
            onChange={handleInputs} />
          </Form.Group>

          <FloatingLabel controlId="floatingSelect" label="Select domain">
            <Form.Control as="select" name="domain" aria-label="select domain" value={idea.domain}
            onChange={handleInputs}>
              <option>Domain</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Innovation">Innovation</option>
              <option value="Other">Other</option>
            </Form.Control>
          </FloatingLabel>
          <hr></hr>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Submit Your PPT/PDF</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <hr></hr>

          <h2 style={{ marginTop: "42px", marginBottom: "20px" }}>
            Prototype Details
          </h2>
          <hr></hr>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Prototype Demo Link</Form.Label>
            <Form.Control type="text" placeholder="Demo Link" name="demoLink"
            value = {idea.demoLink}
            onChange={handleInputs} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Video Link</Form.Label>
            <Form.Control type="text" placeholder="Video Link" name="videoLink"
            value = {idea.videoLink}
            onChange={handleInputs} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Repository Link</Form.Label>
            <Form.Control type="text" placeholder="Repository Link" name="repoLink"
            value = {idea.repoLink}
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

export default NewIdea;
