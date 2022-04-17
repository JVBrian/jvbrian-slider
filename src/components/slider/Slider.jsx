import { useRef, useEffect, useState, createRef } from "react";
import { motion } from "framer-motion";
import Images from "../../assets/js/Images";
import "./slider.css";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {Images.map((image) => {
          return (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
