const subTitle = "My Qualification";
const title = "Education";
const desc =
  "Having completed both a diploma and a degree in engineering, I have developed a solid foundation in technical subjects, practical experience, and problem-solving skills. The diploma provided hands-on training and essential knowledge, while the degree further strengthened my understanding of advanced engineering concepts. This combination has equipped me with a well-rounded skill set, allowing me to effectively design, analyze, and optimize systems and processes within my field.";
const aboutList = [
  {
    imgUrl: "assets/images/about/icon/01.jpg",
    imgAlt: "about",
    title: "Bachelor Of Engineering",
    desc: "Goverment College Of Engineering Avsari,Pune, Savitribai Phule Pune University    ",
  },
  {
    imgUrl: "assets/images/about/icon/02.jpg",
    imgAlt: "about",
    title: "Deploma in Engineering",
    desc: "Goverment Polytechnic Ahmednagar  ,MSBTE   ",
  },
  {
    imgUrl: "assets/images/about/icon/03.jpg",
    imgAlt: "about",
    title: "SSC 10th Science",
    desc: "Savitribai Phule Pune University    ",
  },
];

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
          <div className="col">
            <div className="about-right padding-tb">
              <div className="section-header">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
              </div>
              <div className="section-wrapper">
                <ul className="lab-ul">
                  {aboutList.map((val, i) => (
                    <li key={i}>
                      <div className="sr-left">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="sr-right">
                        <h5>{val.title}</h5>
                        <p>{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-left">
              <div className="about-thumb">
                <img src="assets/images/about/01.png" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
