import "./Cta.css";

export default function Cta({ size }) {
  return (
    <a className="cta" href="#" style={{ fontSize: `${size}rem` }}>
      Get Started Now
    </a>
  );
}
