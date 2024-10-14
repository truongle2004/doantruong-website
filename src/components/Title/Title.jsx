import "./index.css";
import children from "../../assets/children5.png";
import logoDoan from "../../assets/logoDoan.png";
import logoGDU from "../../assets/logoGDU.png";

const HeadingTitle = () => {
  return (
    <div className="image-container">
      <img src={children} alt="tapthe" className="image" />

      <div className="top-text">
        <h2>Top Title Here</h2>
      </div>
      <div className="overlay title1">
        <p>HOẠT ĐỘNG TÌNH NGUYỆN</p>
        <h1>ĐOÀN TRƯỜNG ĐẠI HỌC GIA ĐỊNH</h1>
        <div className="logo">
          <div>
            <img
              src={logoDoan}
              alt="logo đoàn thanh niên"
              style={{
                width: "60px",
              }}
            />
          </div>
          <div>
            <img
              src={logoGDU}
              alt="logo Gia Dinh university"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingTitle;
