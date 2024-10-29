import styles from './index.module.scss'; // Adjust the path as needed
import logoGDU from '../../../assets/logoGDU.png';
import logoDoan from '../../../assets/logoDoan.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClickImageGDU = () => {
    window.location.href = 'https://giadinh.edu.vn/';
  };

  const handleClickImageDoan = () => {
    window.location.href = 'https://doanthanhnien.vn/';
  };

  const handleNavigateHomePage = () => {
    navigate('/home');
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
          <div
            className={styles.navbarSupport}
            onClick={handleNavigateHomePage}
          >
            HOME
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
