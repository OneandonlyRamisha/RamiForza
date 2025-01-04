import "./ProcessSection.css";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function PrecessSection() {
  const targerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targerRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targerRef} className="process-section">
      <div className="process-container">
        <h2 className="services-section-header">
          <span className="outlined-font">just</span> two weeks{" "}
          <span className="outlined-font">from</span> <br />
          start &rarr; <span className="outlined-font">to</span> Finish
        </h2>
        <div className="process-items-container-ultra">
          <motion.div style={{ x }} className="process-items-container">
            <motion.div className="process-item">
              <i className="material-icons process-icon">video_call</i>
              <h5 className="process-item-header">Discovery Call</h5>
              <p className="process-item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, quos. Distinctio ad sint minus pariatur eius vel illum
                vitae odit earum maxime, vero quas facilis beatae! Quaerat unde
                aperiam illo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
