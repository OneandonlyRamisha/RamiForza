import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <Navitems item="About Us" />
          <Navitems item="Process" />
          <Navitems item="Services" itemLink={"#Services"} />
          <a href="#">
            <img className="logo" src="logo.png" alt="RamiForza's Brand Logo" />
          </a>
          <Navitems item="See Our Work" />
          <Navitems item="Blog" />
          <Navitems item="FAQ" itemLink={"#faqId"} />
        </ul>
      </nav>
    </header>
  );
}

function Navitems({ item, itemLink }) {
  return (
    <li>
      <a className="underline-animations" href={itemLink}>
        {item}
      </a>
    </li>
  );
}
