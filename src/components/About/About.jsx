import "./About.css";
import Coding from "../../assets/coding.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About</span>
      <span className="aboutDesc">
        I&rsquo;m a current first-year student from Spring, TX currently
        studying at the University of Texas at Dallas and pursuing a B.S. in
        Computer Science, possibly also fast-track into an M.S. in Computer
        Science. I am currently looking for a summer internship to gain
        experience in the field of Computer Science. I am also looking for
        opportunities to work on projects or conduct research with other
        students or professionals. For fields I&rsquo;m interested in, they
        include Software Development, Software Engineering, and Web Development,
        but I&rsquo;m open to any field within Computer Science.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Coding} alt="Coding" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Programming Languages and Data Structures</h2>
            <p>
              I have knowledge in the C++, Java, JavasScript, HTML, and CSS
              Languages. For Data Structures, I know how to utilize Linked
              Lists, Binary Search Trees, and Graphs.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              With my knowledge on JavaScript, HTML, and CSS, I tinkered with
              the React.js library to create, for example, websites like this
              one you&apos;re on!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              In my high school independent study class, I worked with the
              Flutter framework and the Dart langauge to experiment in making a navigatable and
              user-friendly interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
