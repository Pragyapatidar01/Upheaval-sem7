import React from 'react';
import Organisationdata from '../components/Organisationdata';
import Card from '../components/Cards';
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';


function Organization() {
  const history = useNavigate();
  const handleProblemClick = () => {
    history("/detailMentor");
  };
  return (
    <>
    <Sidebar />
    <div className='Organization'>
      <div className="cardss">
      <Card 
        imgsrc={Organisationdata[0].imgsrc}
        title={Organisationdata[0].title}
        sname={Organisationdata[0].sname} 
        link={Organisationdata[0].link} 
      />
      
      <Card 
        imgsrc={Organisationdata[1].imgsrc}
        title={Organisationdata[1].title}
        sname={Organisationdata[1].sname} 
        link={Organisationdata[1].link} 
      />
      <Card 
      imgsrc={Organisationdata[2].imgsrc}
      title={Organisationdata[2].title}
      sname={Organisationdata[2].sname} 
      link={Organisationdata[2].link} 
      />
      <Card 
        imgsrc={Organisationdata[3].imgsrc}
        title={Organisationdata[3].title}
        sname={Organisationdata[3].sname} 
        link={Organisationdata[3].link}  
      />
      <Card 
        imgsrc={Organisationdata[4].imgsrc}
        title={Organisationdata[4].title}
        sname={Organisationdata[4].sname} 
        link={Organisationdata[4].link} 
      />
      </div>
    </div>
    </>
  );
}

export default Organization;