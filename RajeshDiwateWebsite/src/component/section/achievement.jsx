import CountUp from "react-countup";

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With Edukon";

const achievementList = [
  {
    count: "3",
    desc: "Years of Development Experience",
  },
  {
    count: "4",
    desc: "Project Completion",
  },
  {
    count: "2",
    desc: "Ecommerce website Completion",
  },
  {
    count: "5",
    desc: "Self-Initiated Projects",
  },
];

const achieveList = [
  {
    imgUrl: "assets/images/achive/01.png",
    imgAlt: "achive thumb rajibraj91 rajibraj",
    title: "Start Teaching Today",
    desc: "Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica",
    btnText: "Become A Instructor",
    siteLink: "#",
  },
  {
    imgUrl: "assets/images/achive/02.png",
    imgAlt: "achive thumb rajibraj91 rajibraj",
    title: "If You Join Our Course",
    desc: "Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica",
    btnText: "Register For Free",
    siteLink: "#",
  },
];

const Achievement = () => {
  return (
    <div className="achievement-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">{subTitle}</span> */}
          {/* <h2 className="title">{title}</h2> */}
        </div>
        <div className="section-wrapper">
          <div className="counter-part mb-4">
            <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
              {achievementList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <CountUp end={val.count} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="achieve-part">
            <div className="row g-4 row-cols-1 row-cols-lg-2">
              {achieveList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="achieve-item">
                    <div className="achieve-inner">
                      <div className="achieve-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="achieve-content">
                        <h4>{val.title}</h4>
                        <p>{val.desc}</p>
                        <a href={val.siteLink} className="lab-btn">
                          <span>{val.btnText}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
