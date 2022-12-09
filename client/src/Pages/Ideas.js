import React, { useState,useEffect } from "react";
import Ideadata from "../components/Ideadata";
import Card from "../components/Cards";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";


function Ideas() {
  const history = useNavigate();

  useEffect(() => {
    getIdeas();
    
  }, []);

  const [data,setData] = useState([]);

  const getIdeas = async () => {
    try{
      const res = await fetch('/ideas', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const resData = await res.json();
      console.log(resData);
      setData(resData);
      
      if(!data){
        console.log("Failed to get");
      }else{
        console.log("Data got on react");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProblemClick = () => { 
    history("/detailIdeas");
  };
  return (
    <>
    <Sidebar />
    <div className="products">
      
      <div className="cardss">

      {data?.map((d, i) => {
        return(
        <Card imgsrc={Ideadata[i].imgsrc}
          title={d.title}
          sname={d.domain}
          link={d.repoLink}
          key={i} />
        )
      })}
        
      </div>
    </div>
    </>
  );
}

export default Ideas;
