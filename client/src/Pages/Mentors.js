import React from 'react';
import Mentordata from '../components/Mentordata';
import Card from '../components/Cards';
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';

function Mentors() {
  const history = useNavigate();
  const handleProblemClick = () => {
    history("/detailMentor");
  };
  return (
    <>
    <Sidebar />
    <div className='home'>
      <div className="cardss">
      <Card 
        imgsrc={Mentordata[0].imgsrc}
        title={Mentordata[0].title}
        sname={Mentordata[0].sname} 
        link={Mentordata[0].link} 
      />
      
      <Card 
        imgsrc={Mentordata[1].imgsrc}
        title={Mentordata[1].title}
        sname={Mentordata[1].sname} 
        link={Mentordata[1].link} 
      />
      <Card 
      imgsrc={Mentordata[2].imgsrc}
      title={Mentordata[2].title}
      sname={Mentordata[2].sname} 
      link={Mentordata[2].link} 
      />
      <Card 
        imgsrc={Mentordata[3].imgsrc}
        title={Mentordata[3].title}
        sname={Mentordata[3].sname} 
        link={Mentordata[3].link}  
      />
      <Card 
        imgsrc={Mentordata[4].imgsrc}
        title={Mentordata[4].title}
        sname={Mentordata[4].sname} 
        link={Mentordata[4].link} 
      />
      </div>
    </div>
    </>
  );
}

export default Mentors;