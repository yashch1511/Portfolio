import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const [field, setfname] = React.useState("");
  const [field1, setlname] = React.useState("");

  function handlechange(event) {
    setfname(event.target.value);
  }

  function handlelname(event) {
    setlname(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="contactbg">
        <div class="form-container">
          <form action="/submit-form" method="post">
            <div className="form-group">
              <h1 className="contactinvite">
                Kindly share your info to contact me
              </h1>
              <h1>
                Hello {field} {field1}
              </h1>

              <label for="firstName">First Name</label>
              <input
                onChange={handlechange}
                type="text"
                id="firstName"
                name="firstName"
                required
                value={field}
              />
            </div>
            <div className="form-group">
              <label for="lastName">Last Name</label>
              <input
                onChange={handlelname}
                type="text"
                id="lastName"
                name="lastName"
                required
                value={field1}
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
