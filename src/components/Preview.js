import React from "react";
import "../css/style.css";
import'../css/phone.css';
import { Link } from 'react-router-dom'
export default function Preview() {
  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="java">Notes</h2>
              <p className="java">
                Here you will get all the notes of all the engineerings subjets for Computer Science Department.. 
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>01</h2>
          </div>
        </div>

        <div className="cards">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">E-Books</h2>
              <p className="python">
                E-books will be provided which you can download and read from the website..
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>02</h2>
          </div>
        </div>

        <div className="cards">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Syallbus and many more..</h2>
              <p className="cSharp">
                Here you will find semester-wise syallbus of all the specialization courses and also some previous year question paper..
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>03</h2>
          </div>
        </div>
      </div>
      <div className="text-center">
      {/* <button type="button" className="btn btn-info but">Go to specialization Page</button> */}
      <Link className="btn btn-info but" to="Final"> Go to specialization Page </Link>

      </div>
    </>
  );
}
