import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Project() {
  return (
    <div>
      <Navbar />
      <div className="projectlayout">
        <h1 className="fline">Some of my projects </h1>
        <div className="Adjust">
          <div className="project1">
            <img className="TTT" src="/Screenshot 2024-07-26 234340.png" />
            <p className="pp">
              I developed a classic Tic Tac Toe game using the fundamental web
              technologies:HTML for web structure,CSS for styling and JavaScript
              for functionality. This project includes interactive features
              allowing players to make their moves and win the game.I designed
              it using grid layout,and to enhance the visual appeal,I applied a
              color burn effect to the background image.
            </p>
          </div>

          <div className="project2">
            <p className="pp">
              I developed a website that allows users to input a URL and
              generates a QR code for that URL. This feature is useful for
              quickly creating QR codes that can be scanned to access the URL
              directly.I used librarieslike qr-image,file system and body parser
              as middleware.The qr-image generates the QR code based on the
              input url and file System handles saving the generated QR code
              image allowing me to use it.
            </p>
            <img className="Qr" src="/Qr.png" />
          </div>

          <div className="project1">
            <img className="TTT" src="/drumkit.png" />
            <p className="pp">
              I created an interactive drum kit application using HTML, CSS, and
              JavaScript. This project allows users to simulate playing a drum
              kit through their web browser.I designed the interface with
              buttons representing different drum components.
            </p>
          </div>

          <div className="project2">
            <p className="pp">
              I created a front-end website similar to Tinder, but designed for
              dogs.I could not add all the screenshots of my website here.I
              developed a pricing page using Bootstrap, a popular front-end
              framework, which you then customized further with CSS for unique
              styling.I implemented a billing page that users are directed to
              after selecting a subscription or service. Then I dded event
              listeners to the buttons, specifically listening for the onClick
              event. When a user clicks on a button, this event triggers a
              corresponding function in JavaScript.
            </p>
            <img className="Qr" src="/tindog.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
