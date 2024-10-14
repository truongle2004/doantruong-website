import { motion } from "framer-motion";
import { data } from "../../data";
import "./index.css";
import PropTypes from "prop-types";

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

Card.propTypes = {
  cover: PropTypes.array,
};

function Card({ cover }) {
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
        <img src={cover[0]} />
      </motion.div>
    </motion.div>
  );
}

const Post = () => {
  return data.map((data, index) => (
    <div key={index} className="container">
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Card cover={data?.cover} />
        </div>

        <div className="line" />
        <div className="content">
          <div className="header-content">
            <div>
              <p className="title">{data?.title}</p>
            </div>
            <div>
              <p className="sub-title">{data?.content[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Post;
