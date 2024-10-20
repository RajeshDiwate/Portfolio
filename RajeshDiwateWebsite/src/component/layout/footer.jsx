import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
// import { NavLink } from "react-router-dom";

const newsTitle = "I Can Develop Anything You Want ";
const siteTitle = "Social Media";
const useTitle = "Useful Links";
const socialTitle = "Social Contact";
const supportTitle = "Our Support";

const siteList = [
  // {
  //   text: "Facebook",
  //   link: "https://www.facebook.com/profile.php?id=100070384209766",
  // },
  {
    text: "Linkedin",
    link: "https://linkedin.com/in/rajesh-diwate-050a20273/",
  },
  {
    text: "Github",
    link: "https://github.com/RajeshDiwate?tab=repositories",
  },
  {
    text: "WhatsApp",
    link: "https://api.whatsapp.com/send/?phone=7083592725&text&type=phone_number&app_absent=0",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/rajesh_diwate07/",
  },
];

const useList = [
  {
    text: "Skill",
    link: "#skills",
  },
  {
    text: "Portfolio",
    link: "#portfolio",
  },
  {
    text: "Experience",
    link: "#experiance",
  },
  {
    text: "Education",
    link: "#education",
  },
  {
    text: "Contact Us",
    link: "#contact",
  },
];

const socialList = [
  // {
  //   text: "+91 9112393097",
  //   link: "#",
  // },
  {
    text: "+91 7083592725",
    link: "#",
  },
  // {
  //   text: "Banglore, Karnataka, India.",
  //   link: "#",
  // },
  {
    text: "Pune, Maharashtra, India.",
    link: "#",
  },
  // {
  //   text: "Github",
  //   link: "#",
  // },
];

const supportList = [
  {
    text: "Help Center",
    link: "#",
  },
  {
    text: "Paid with Mollie",
    link: "#",
  },
  {
    text: "Status",
    link: "#",
  },
  {
    text: "Changelog",
    link: "#",
  },
  {
    text: "Contact Support",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="news-footer-wrap">
      <div className="fs-shape">
        <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
        <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
      </div>

      <div className="news-letter">
        <div className="container">
          <div className="section-wrapper">
            <div className="news-title">
              <h3>{newsTitle}</h3>
            </div>
            <div className="news-form">
              {/* <a
                href="https://www.facebook.com/profile.php?id=100070384209766"
                target="_blank"
              >
                <FacebookIcon className="abu-icon-social" />
              </a> */}

              <a
                href="https://linkedin.com/in/rajesh-diwate-050a20273/"
                target="_blank"
              >
                <LinkedInIcon className="abu-icon-social" />
              </a>
              <a href="https://github.com/Surajlimbikar" target="_blank">
                <GitHubIcon className="abu-icon-social" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=7083592725&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <WhatsAppIcon className="abu-icon-social" />
              </a>
              <a
                href="https://linkedin.com/in/rajesh-diwate-050a20273/"
                target="_blank"
              >
                <InstagramIcon className="abu-icon-social" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-top padding-tb pt-0">
          <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
              <div className="col">
                {/* <img
                  src="assets/images/shape-img/suraj-img2.jpg"
                  alt="fst"
                  className="footer-img"
                /> */}
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{socialTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {socialList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{siteTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {siteList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link} target="_blank">
                                {val.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{useTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {useList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-2">
          <div className="container">
            <div className="section-wrapper">
              <p>
                &copy; 2024 <Link to="/">Coder</Link> Designed by Rajesh Diwate
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
