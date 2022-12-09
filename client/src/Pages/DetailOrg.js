import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Sidebar from "../components/Sidebar";

const DetailOrg = () => {
  const history = useNavigate();
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
          <h3>Organisation</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={assets.lock} alt="lock" widht="20px" height="20px" />
              Idea only visible to company
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
          <h5 className="pe-5">Overview</h5>
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
          Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum vLorem IpsumLorem IpsumLorem Ipsum
          <p>
            Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem
          </p>
          <p>
            Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
            IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem
          </p>
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

export default DetailOrg;