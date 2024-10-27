import { motion } from 'framer-motion';
import styles from './index.module.scss';
import children from '../../../assets/children5.png';
import logoDoan from '../../../assets/logoDoan.png';
import logoGDU from '../../../assets/logoGDU.png';

const HeadingTitle = () => {
  return (
    <div className={styles["image-container"]}>
      <img src={children} alt='tapthe' className={styles.image} />

      <div className={styles.overlay}>
        <motion.div
          className={styles.content}
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
            className={styles.subtitle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            HOẠT ĐỘNG TÌNH NGUYỆN
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            ĐOÀN TRƯỜNG ĐẠI HỌC GIA ĐỊNH
          </motion.h1>

          <div className={styles.logo}>
            <img
              src={logoDoan}
              alt='logo đoàn thanh niên'
              className={styles["logo-doan"]}
            />
            <img
              src={logoGDU}
              alt='logo Gia Dinh university'
              className={styles["logo-gdu"]}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeadingTitle;
