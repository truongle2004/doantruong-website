import { motion } from 'framer-motion';
import './index.scss';
import children from '../../../assets/children5.png';
import logoDoan from '../../../assets/logoDoan.png';
import logoGDU from '../../../assets/logoGDU.png';

const HeadingTitle = () => {
  return (
    <div className='image-container'>
      <img src={children} alt='tapthe' className='image' />

      <div className='overlay'>
        <motion.div
          className='content'
          initial='hidden'
          animate='visible'
          variants={{
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <motion.p
            className='subtitle'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            HOẠT ĐỘNG TÌNH NGUYỆN
          </motion.p>

          <motion.h1
            className='title'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            ĐOÀN TRƯỜNG ĐẠI HỌC GIA ĐỊNH
          </motion.h1>

          <div className='logo'>
            <img
              src={logoDoan}
              alt='logo đoàn thanh niên'
              className='logo-doan'
            />
            <img
              src={logoGDU}
              alt='logo Gia Dinh university'
              className='logo-gdu'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeadingTitle;
