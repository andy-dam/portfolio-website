import "./Intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello!</span>
        <span className="introText">
          I&apos;m <span className="introName">Andy</span> <br />
          Computer Science Student
        </span>
        <p className="introPara">
          I am an aspiring Software Developer or Engineer, eagerly learning <br/>new
          concepts and ideas in college
        </p>
        <Link smooth={true}
            spy={true}
            offset={-50}
            duration={500} to="about" ><button className="btn"><img src={btnImg} alt="button" className="btnImg"/>Learn More</button></Link>
      </div>
      <img src={bg} alt="background image" className="bg" />
    </section>
  );
};

export default Intro;
