import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import {useNavigate} from "react-router-dom"


function About() {

  const navigate=useNavigate();

  function handlehaha(){
    navigate("/Contact")

  }
  return (
    <div>
      <Navbar />
      <div className="Layout">
        <div className="Content">
          <h3 className="Me">Hello,Welcome</h3>
          <h1 className="Name">I am Yash Chaturvedi</h1>
          <p className="haha">
            I'm currently a second-year student in the IT department at D.J.
            Sanghvi College of Engineering. I'm passionate about web development
            and enjoy exploring new technologies and trends in the field. I'm
            always eager to learn new skills and expand my knowledge, whether
            it's through coursework, personal projects, or collaboration with
            others.
          </p>
          <button className="Contactis">Contact Me</button>
        </div>
        <img className="pfp" src="/final.jpeg" />

        <h1 className="myskills">My Skills</h1>
        <div className="logos">
          <img className="logo" src="./java2.svg" />
          <img className="logo" src="/py.jpg" />
          <img className="logo" src="/react-1-logo.svg" />
          <img className="logo" src="/js.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
