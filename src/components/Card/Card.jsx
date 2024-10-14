import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./index.css";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Card = ({ cover }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="splash"
        style={{
          background: "linear-gradient(90deg, #2E3192, #1BFFFF)",
        }}
      />
      <motion.div className="card" variants={cardVariants}>
        {cover && cover.length > 0 ? (
          <img src={cover[0]} alt="Cover image" />
        ) : (
          <p>No cover image available</p>
        )}
      </motion.div>
    </motion.div>
  );
};

Card.propTypes = {
  cover: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
