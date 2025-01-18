import "./ProcessSection.css";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { servicesInfo } from "./processInfo.js";

export default function PrecessSection() {
  const targerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targerRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  return (
    <section ref={targerRef} id="process" className="process-section">
      <div className="process-container">
        <h2 className="services-section-header">
          <span className="outlined-font">just</span> two weeks{" "}
          <span className="outlined-font">from</span>{" "}
          <br className="not-avaible" />
          start &rarr; <span className="outlined-font">to</span> Finish
        </h2>
        <div className="process-items-container-ultra">
          <motion.div style={{ x }} className="process-items-container">
            {Object.values(servicesInfo).map((e) => (
              <motion.div className="process-item" key={e.name}>
                <i className="material-icons process-icon">{e.iconName}</i>
                <h5 className="process-item-header">{e.name}</h5>
                <p className="process-item-description">{e.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
