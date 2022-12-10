import React,{useState,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import Sidebar from "../components/Sidebar";

const DetailIdeas = () => {

  const [data,setData] = useState([]);
  const [domain,setDomain] = useState();
  // const [data,setData] = useState([]);
  // const [data,setData] = useState([]);
  // let domain;
  
  const history = useNavigate();
  const location = useLocation();
  console.log("woohoo")
  const {index} = location.state;
    console.log(index);
  
  // const { index } = location.state;

  useEffect(() => {
    getIdeas();
    
    
  }, []);

  

  const getIdeas = async () => {
    try{
      const res = await fetch('/detailIdeas', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const resData = await res.json();
      // console.log(resData[index].domain);
      setDomain('mydomain');
      setData(resData);
      
      if(!data){
        console.log("Failed to get");
      }else{
        console.log("Data got on react");
        // console.log(data[index].domain)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Sidebar />
    <div
      className="container-fluid px-0"
      style={{ width: "83%", marginRight: "0", marginTop: "5rem" }}
    >
      <div style={{ height: "350px", overflow: "hidden" }}>
        <img
          style={{ width: "100%", height: "356px" }}
          src={assets.psimg}
          alt="ps"
        />
      </div>
      <div
        className="d-flex align-items-center justify-content-between mx-auto"
        style={{ width: "90%", textAlign: "left" }}
      >
        <div className="pt-3" style={{ height: "100px", width: "41%" }}>
          <h3>Idea</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={assets.lock} alt="lock" widht="20px" height="20px" />
            </div>
            <div className="d-flex align-items-center">
              <img src={assets.verified} alt="verified" /> Verified Organisation
            </div>
            <div>
              <img
                src={assets.calendar}
                alt="calendar"
                widht="20px"
                height="20px"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => history("/SubmitSolution")}
        >
          Like
        </button>
      </div>
      <div>
        <div
          className="d-flex align-items-center"
          style={{ paddingLeft: "3.6rem" }}
        >
          <h5 className="pe-5">Idea Description</h5>
          <hr style={{ width: "82%", height: "2px" }} />
        </div>
        <div
          style={{
            width: "77%",
            marginRight: "5rem",
            marginLeft: "auto",
            textAlign: "left",
          }}
        >
          {/* {myarray.title} */}
          {/* {alert(data[index])} */}
          {domain}
          {/* {data[index]}
          {data[index]}
          {data[index]} */}
          
        </div>
      </div>
      <div>
        <div
          className="d-flex align-items-center"
          style={{ paddingLeft: "3.6rem" }}
        >
          <h5 className="pe-5">Resources</h5>
          <hr style={{ width: "82%", height: "2px" }} />
        </div>
        <div
          style={{
            width: "77%",
            marginRight: "5rem",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <p>
            Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem
          </p>
          <ul className="ps-4 text-start">
            <li>
              <a href="#">one</a>
            </li>
            <li>
              <a href="#">two</a>
            </li>
            <li>
              <a href="#">three</a>
            </li>
          </ul>
          <p>
            Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem
          </p>
          <ul className="pe-4 text-start">
            <li>
              <a href="#">four</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div
          className="d-flex align-items-center"
          style={{ paddingLeft: "3.6rem" }}
        >
          <h5 className="pe-5">Prizes</h5>
          <hr style={{ width: "82%", height: "2px" }} />
        </div>
        <div
          style={{
            width: "77%",
            marginRight: "5rem",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <p>
            Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem
          </p>
          <ul className="text-start" style={{ listStyle: "none", padding: 0 }}>
            <li>
              <img src={assets.trophy} alt="trophy" />
              one -$abc
            </li>
            <li>
              <img src={assets.trophy} alt="trophy" />
              two -$abc
            </li>
            <li>
              <img src={assets.trophy} alt="trophy" />
              three -$abc
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailIdeas;