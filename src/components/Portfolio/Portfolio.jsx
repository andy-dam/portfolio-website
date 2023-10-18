import "./Portfolio.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="portfolioDesc">
        apowiri uoweruio eri uopwer iuop wep iuorwepi urewiourweoiu rwioue
        rioupwepru ioweriu oweriuo
      </span>
      <div className="portfolioImgs">
        <img src={Portfolio1} alt="Portfolio1" className="portfolioImg" />
        <img src={Portfolio2} alt="Portfolio2" className="portfolioImg" />
        <img src={Portfolio3} alt="Portfolio3" className="portfolioImg" />
        <img src={Portfolio4} alt="Portfolio4" className="portfolioImg" />
        <img src={Portfolio5} alt="Portfolio5" className="portfolioImg" />
        <img src={Portfolio6} alt="Portfolio6" className="portfolioImg" />
      </div>
      {/* <button className="portfolioBtn">See More</button> */}
    </section>
  );
};

export default Portfolio;
