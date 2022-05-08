import React from "react";
import background from "../images/caro1.jpg";
import "../css/style.css";
import '../css/phone.css';
export default function Back() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    opacity: "0.8",
    position: "relative",
    zIndex: "-1",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div style={myStyle}></div>
      <h1 className="text-center text fs-1 text-danger">MyCollegeSpace</h1>
      <h3>
        <span className="text-light">It's all about</span>
        <div className="message">
          <div className="word1 ">Notes</div>
          <div className="word2 ">books</div>
          <div className="word3 ">papers</div>
        </div>
        
      </h3>
    </>
  );
}
