import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="Leftside">
          <h4>
            <i className="fa-solid fa-house"></i> 123 MUMBAI,INDIA
          </h4>
          <h4 className="nala">
            <i className="fa-solid fa-phone"></i> 9999888822
          </h4>
          <h4 className="naga">✉️ yashch1511@gmail.com</h4>
        </div>

        <div className="Rightside">
          <a className="social" href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="social" href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="social" href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="social" href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="invite1">Interested to work with me?</p>
        <p className="invite">Reach out to me through my Socials</p>
        <p className="Copyright"> Copyright {year}</p>
      </footer>
    </div>
  );
}
export default Footer;
