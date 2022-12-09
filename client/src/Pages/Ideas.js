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
      {/* <Card
          imgsrc={Ideadata[0].imgsrc}
          title={data[0].domain}
          sname={data[0].title}
          link={Ideadata[0].link}
        /> */}
      {data?.map((d, i) => {
        <Card imgsrc={Ideadata[0].imgsrc}
          title="abcd"
          sname="bacd"
          link="http" 
          key={i} />
      })}
        {/* <Card
          imgsrc={Ideadata[0].imgsrc}
          title={data[0].domain}
          sname={data[0].title}
          link={Ideadata[0].link}
        />

        <Card
          imgsrc={Ideadata[1].imgsrc}
          title={Ideadata[1].title}
          sname={Ideadata[1].sname}
          link={Ideadata[1].link}
        />
        <Card
          imgsrc={Ideadata[2].imgsrc}
          title={Ideadata[2].title}
          sname={Ideadata[2].sname}
          link={Ideadata[2].link}
        />
        <Card
          imgsrc={Ideadata[3].imgsrc}
          title={Ideadata[3].title}
          sname={Ideadata[3].sname}
          link={Ideadata[3].link}
        />
        <Card
          imgsrc={Ideadata[4].imgsrc}
          title={Ideadata[4].title}
          sname={Ideadata[4].sname}
          link={Ideadata[4].link}
        /> */}
      </div>
    </div>
    </>
  );
}

export default Ideas;
