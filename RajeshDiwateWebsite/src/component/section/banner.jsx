const subTitle = "Full Stack Web Developer  (MERN)";
const title = (
  <h2 className="title">
    <span className="d-lg-block">Rajesh Diwate</span>
  </h2>
);
const desc =
  "I'm a passionate web developer with 3 years of experience building scalable, high-performance web applications using React, Next.js, and Node.js. I thrive in every stage of development, from collaboration to implementation. My expertise in reusable components and code optimization ensures efficient, maintainable solutions. Always eager to learn, I stay updated with the latest technologies and trends.";
const catagoryList = [
  {
    name: "Figma",
    link: "#",
  },
  {
    name: "Adobe XD",
    link: "#",
  },
  {
    name: "illustration",
    link: "#",
  },
  {
    name: "Photoshop",
    link: "#",
  },
];

const shapeList = [
  {
    name: "16M Students Happy",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "130K+ Total Courses",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "89% Successful Students",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "23M+ Learners",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "36+ Languages",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-12 col-xl-6 col-lg-12">
              <div className="banner-content">
                {title}
                <h6 className="subtitle  fw-medium">{subTitle}</h6>
                <p
                  className="desc"
                  style={{
                    fontSize: "25px",
                    // backgroundColor: "brown",
                    // color: "#444",
                    paddingTop: "40px",
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 order1">
              {/* <div className="banner-thumb fadeInUp text-align-center"> */}
              {/* <img src="assets/images/atom.png" alt="img" className="icon" /> */}
              {/* <img
                src="assets/images/logo/Logo_RD.png"
                alt="img"
                className="icon"
              /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="all-shapes"></div> */}
      {/* <div className="cbs-content-list d-none">
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a href={val.link}>{val.name}</a>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};

export default Banner;
