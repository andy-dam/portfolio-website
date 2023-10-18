import { useRef } from "react";
import "./Contact.css";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gk2js3o",
        "template_mrwc9zj",
        form.current,
        "IXRtvYtkjoS1ZPmuC"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      {/* <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I able work for these dudes, they are awesome
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div> */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Feel free to fill out the form to discuuss any work or internship opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Name"
            name="your_name"
            required
          />
          <input
            type="text"
            className="email"
            placeholder="Email"
            name="your_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Message"
            required
          />
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/andydam/" target="_blank" rel="noreferrer" >
              <img src={LinkedIn} alt="LinkedIn" className="link" onClick="" />
            </a>
            <a href="https://github.com/andy-dam" target="_blank" rel="noreferrer" >
              <img src={GitHub} alt="GitHub" className="link" onClick="" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
