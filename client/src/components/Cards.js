import React from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


function Cards(props){

    return(
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link}>
              <button class="mybtn btn-outline-dark"><Link to={"/detailIdeas"}
                  state = {{index: props.index }} style={{ textDecoration: 'none' }}>Read More</Link></button>
            </a>
           
          </div>
        </div>
      </div>
      </>);
    }
    export default Cards;