import { motion } from 'framer-motion';
import './index.module.scss';

// eslint-disable-next-line react/prop-types
const AnimatedButton = ({ children }) => {
  return (
    <div className='example-container'>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className='animated-button'
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedButton;
