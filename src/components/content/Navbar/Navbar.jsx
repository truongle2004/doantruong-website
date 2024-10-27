import styles from './index.module.scss'; // Adjust the path as needed
import logoGDU from '../../../assets/logoGDU.png';
import logoDoan from '../../../assets/logoDoan.png';

const Navbar = () => {
  const handleClickImageGDU = () => {
    window.location.href = 'https://giadinh.edu.vn/';
  };

  const handleClickImageDoan = () => {
    window.location.href = 'https://doanthanhnien.vn/';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarLogo}>
          <div>
            <img src={logoDoan} alt='logo' onClick={handleClickImageDoan} />
          </div>
          <div>
            <img src={logoGDU} alt='logo' onClick={handleClickImageGDU} />
          </div>
        </div>
        <div className={styles.navbarSupportContent}>
          <div className={styles.navbarSupport}>DETAIL</div>
          <div className={styles.navbarSupport}>ABOUT</div>
          <div className={`${styles.navbarSupport} ${styles.contact}`}>
            CONTACT
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
