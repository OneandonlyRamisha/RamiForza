import Cta from "../Cta/Cta";
import "./Herosection.css";

export default function Herosection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h2 className="call-out">Are You A Business Owner?</h2>
        <h1 className="hero-header">
          We'll Build Your Business A Website, That Drives Real
          <span className="highlight"> Business Results</span>
        </h1>
        <h3 className="hero-subheader">
          We build you a custom website designed for increasing your conversion
        </h3>

        <div className="hero-button-container">
          <Cta />

          <Secondbutton text="See Our Work" />
        </div>
      </div>
      <div className="testimonials-container">
        <Testimonial text='"HUGE increase in new customers!"' />
        <Testimonial text='"My personal brand combined with Ramiforza Website is a Money making Machine"' />
        <Testimonial text='"Went from barely booking any calls to 10 calls a week!"' />
      </div>
    </section>
  );
}

function Secondbutton({ text }) {
  return (
    <a className="secondary-button underline-animations" href="#">
      {text}
    </a>
  );
}

function Testimonial({ text }) {
  return (
    <div className="testimonial">
      <p className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="testimonial-text">{text}</p>
    </div>
  );
}
