import React from "react";
import "../Login/style.css";

export default function Login() {
  return (
    <>
      <div className="con">
        <div className="navbar">
          <ul>
            <li className="title-bold">Navbar</li>
            <li>Home</li>
            <li>General Health Status</li>
            <li>Activity Status</li>
            <li>Stroke Prediction</li>
            <li>Alzheiner Prediction</li>
            <li>About</li>
          </ul>
        </div>
        <div className="title">
          <h1>OHDEP::Open Health Data Exchange Platform</h1>
          <p>OHDEP기반 개인 건강정보 통합 포탈 서비스 입니다.</p>
        </div>
        <div className="user">
          <div className="itemm">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="user_info">
              <h3>김길동</h3>
            </div>
          </div>
          <div className="itemm">2</div>
          <div className="itemm">3</div>
          <div className="itemm">4</div>
          <div className="itemm">5</div>
        </div>
      </div>
    </>
  );
}
