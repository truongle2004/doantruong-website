import "./index.css";
import logoGDU from "../../assets/logoGDU.png";
import logoDoan from "../../assets/logoDoan.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-content">
        <div className="navbar-logo">
          <div>
            <img
              src={logoDoan}
              alt="logo"
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </div>
          <div>
            <img
              src={logoGDU}
              alt="logo"
              style={{
                width: "100px",
              }}
            />
          </div>
        </div>
        <div className="navbar-support-content">
          <div className="navbar-support detail">DETAIL</div>
          <div className="navbar-support about">ABOUT</div>
          <div className="navbar-support contact">CONTACT</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
