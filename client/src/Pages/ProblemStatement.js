import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export const ProblemStatements = () => {
  const history = useNavigate();
  const handleProblemClick = () => {
    history("/detailps");
  };
  return (
    <>
    <Sidebar />
    <div style={{ width: "80%", marginLeft: "auto", marginTop: "5rem" }}>
      <div className="container py-4 text-start">
        <h2 className="ps-4">
          Problem Statement
          {/* <b style={{ paddingRight: "2rem" }}>Problem Statement</b> */}
          <hr style={{ width: "98%" }} />
        </h2>
        <div>
          <div
            className="card my-2"
            style={{ width: "96%", textAlign: "left" }}
            onClick={handleProblemClick}
          >
            <div className="card-body">
              <h5 className="card-title">Problem Statement</h5>
              <h6 className="card-subtitle mb-2 text-muted">#PSId</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card my-2"
            style={{ width: "96%", textAlign: "left" }}
            onClick={handleProblemClick}
          >
            <div className="card-body">
              <h5 className="card-title">Problem Statement</h5>
              <h6 className="card-subtitle mb-2 text-muted">#PSId</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card my-2"
            style={{ width: "96%", textAlign: "left" }}
            onClick={handleProblemClick}
          >
            <div className="card-body">
              <h5 className="card-title">Problem Statement</h5>
              <h6 className="card-subtitle mb-2 text-muted">#PSId</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card my-2"
            style={{ width: "96%", textAlign: "left" }}
            onClick={handleProblemClick}
          >
            <div className="card-body">
              <h5 className="card-title">Problem Statement</h5>
              <h6 className="card-subtitle mb-2 text-muted">#PSId</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
