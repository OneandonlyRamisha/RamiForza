import "./ServicesSection.css";
import { servicesInfo } from "./servicesInfo";
import { act, useState } from "react";

export default function ServicesSection() {
  const [active, setActive] = useState("BusinessWebsite");

  const makingActive = (selectedComponenet) => {
    setActive(selectedComponenet);
    console.log(active);
  };

  return (
    <section className="services-section" id="Services">
      <div className="headers-container">
        <h2 className="services-header">Services</h2>
        <h3 className="services-subheader">
          We Specialize In Following Services
        </h3>
      </div>
      <div className={"services-container"}>
        <div className="service-select">
          <ServiceItems
            name={"Business Website"}
            iconName={"language"}
            onClickEvent={() => makingActive("BusinessWebsite")}
            isActive={active === "BusinessWebsite"} // Pass a boolean to indicate active status
          />
          <ServiceItems
            name={"ChatBot Integration"}
            iconName={"smart_toy"}
            onClickEvent={() => makingActive("ChatBotIntegration")}
            isActive={active === "ChatBotIntegration"}
          />
          <ServiceItems
            name={"Website CopyWriting"}
            iconName={"edit"}
            onClickEvent={() => makingActive("WebsiteCopyWriting")}
            isActive={active === "WebsiteCopyWriting"}
          />
          <ServiceItems
            name={"Website Analytics"}
            iconName={"query_stats"}
            onClickEvent={() => makingActive("WebsiteAnalytics")}
            isActive={active === "WebsiteAnalytics"}
          />
          <ServiceItems
            name={"SEO Optimization"}
            iconName={"wifi_find"}
            onClickEvent={() => makingActive("SEOOptimization")}
            isActive={active === "SEOOptimization"}
          />
        </div>
        <div className="service-explanation">
          <div className="services-text-contianer">
            <h5 className="services-items-subheader">
              {servicesInfo[active].name}
            </h5>
            <h4 className="services-items-header">
              {servicesInfo[active].name}
            </h4>
            <p className="services-items-descriptions">
              {servicesInfo[active].description}
            </p>
            <ul className="services-items-list">
              {servicesInfo[active].listItems.map((e, index) => (
                <li className="services-items-list-item" key={index}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="service-image-container">
            <img
              src={servicesInfo[active].img}
              alt={servicesInfo[active].altText}
              className="services-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItems({ name, iconName, onClickEvent, isActive }) {
  return (
    <button
      onClick={onClickEvent}
      className={`service-select-item service-active ${
        isActive ? "active" : ""
      }`}
    >
      <i
        className={
          isActive
            ? "material-icons service-icon material-icons service-icon-active"
            : "material-icons service-icon"
        }
      >
        {iconName}
      </i>
      <h4
        className={
          isActive
            ? " service-select-item-header service-select-item-header-active"
            : "service-select-item-header"
        }
      >
        {name}
      </h4>
    </button>
  );
}
