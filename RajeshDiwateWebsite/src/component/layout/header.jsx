import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "+91 7083592725";
const address = "rajeshdiwate9@gmail.com";

let socialList = [
  {
    iconName: "icofont-linkedin",
    siteLink: "https://linkedin.com/in/rajesh-diwate-050a20273",
  },
  {
    iconName: "icofont-whatsapp",
    siteLink:
      "https://api.whatsapp.com/send/?phone=7083592725&text&type=phone_number&app_absent=0",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/rajesh_diwate07/",
  },
  // {
  //   iconName: "icofont-facebook",
  //   siteLink: "https://www.facebook.com/profile.php?id=100070384209766",
  // },
  {
    iconName: "icofont-github",
    siteLink: "https://github.com/RajeshDiwate?tab=repositories",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });
  // download cv
  const onButtonClick = () => {
    const pdfUrl = "assets/images/RD_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "RajeshDiwate.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // download cv

  return (
    <header
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div className={`header-top ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li></li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink} target="_blank">
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                {/* <img src="assets/images/logo/01.png" alt="logo" /> */}
                <img src="assets/images/logo/Logo_RD.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#experiance">Experiance</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#education">Education</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <button to="/signup" className="signup" onClick={onButtonClick}>
                <span>Download CV</span>
              </button>

              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
