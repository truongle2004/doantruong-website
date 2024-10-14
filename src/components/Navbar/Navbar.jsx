import './index.css';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-content'>
        <div className='navbar-logo'>
          <div>Icon Gia Dinh</div>
        </div>
        <div className='navbar-support-content'>
          <div className='navbar-support detail'>DETAIL</div>
          <div className='navbar-support about'>ABOUT</div>
          <div className='navbar-support contact'>CONTACT</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
