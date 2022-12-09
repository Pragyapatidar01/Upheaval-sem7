import React from "react";
import '../App.css';
import Sidebar from "../components/Sidebar";
import image from "../assets/AboutUsImages/startup_image.jpg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const AboutUs = () =>{
    
    return(
        <>
        <Sidebar />
        <div className="cardss">
        <div class="container-fluid">
                <div class="row">
                  <div class="col">
                      <div class="m-5 pt-5">
                      <h1 style={{fontSize:"55px"}}><span style={{color:"#367588"}}>Upheaval.</span></h1>
                         <h4 class="pt-4 pb-4" style={{color:"#808080"}}>A common portal for all the stakeholders, which aims to create a common platform for the aspirant students / start up fellows / entrepreneurs for pitching their ideas / prototype / solutions against the issues raised by various agencies.</h4>
                        
                      </div>
                  </div>
                  <div class="col">
                      <div class="text-center mt-5" >
                      <img src={image} alt="alt"  width="102%"  />
                      </div>
                  </div>
                </div>
                <div class="row" style={{marginTop:"8%"}}>
      <div class="col-lg-4 feature-box">
      <FaIcons.FaRegLightbulb size={"50px"}/>
        <h3>Innovate.</h3>
        
      </div>
      <div class="col-lg-4 feature-box">
      <AiIcons.AiFillProject size={"50px"}/>
      {/* <FaIcons.SiSololearn/> */}
        <h3> Learn.</h3>
        
      </div>
      <div class="col-lg-4 feature-box">
      <IoIcons.IoMdNuclear size={"50px"}/>
        <h3>Grow.</h3>
        
      </div>
      </div>
               
            </div>
            </div>
    </>
    );
}
export default AboutUs;