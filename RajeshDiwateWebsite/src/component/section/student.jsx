import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

const subTitle = "Working Company";
const title = "My Work Experience";

const studentList = [
  {
    imgUrl: "assets/images/feedback/student/JunoSoft1.png",
    imgAlt: "JUNO Software Systems Pvt.Ltd.",
    name: "JUNO Software Systems Pvt.Ltd",
    degi: "Pune , India",
    durasion: "(Jul 2023 - Present)",
    href: "https://juno.org.in/",
    desc: "Developed and maintained web applications     using the                                                                  MERN stack, meeting project requirements and deadlines.Collaborated with cross-functional teams to design and implement new features, ensuring seamless integration with existing systems.Implemented responsive and user-friendly interfaces using modern frontend technologies such as React.js and Redux.Designed and optimized database schemas for improved performance and scalability.Conducted code reviews and provided constructive feedback to team members, ensuring code quality and adherence to best practices.Worked closely with clients to gather requirements, provide technical guidance, and address any issues or concerns. Actively participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives.",
  },
  {
    imgUrl: "assets/images/feedback/student/02.jpg",
    imgAlt: "student rajibraj91 rajibraj",
    name: "Primal Infosys",
    degi: "Pune , India",
    durasion: "(Mar 2022 - Jun 2023)",
    href: "https://www.primalinfosys.com/",
    desc: "Gather and anayze requiements from team leads and project stakeholders.Develop responsive user interfaces using HTML, CSS, Bootstrap, and React.js.Design and implement features for online event management and hotel booking    applications using React.js, Redux, Material Design, Express.js, Node.js, HTML, and CSS. Write clean, efficient, and cross-browser compatible code.Fix bugs and implement enhancements to improve application functionality and performance.Integrate code using Git for version control and collaboration.Collaborate with cross-functional teams including designers, frontend developers, and testers to deliver high-quality software solutions.Ensure code quality and adherence to coding standards through code reviews and testing. Stay updated with the latest technologies and industry trends to continuously improve development processes and practices",
  },
];

const Student = () => {
  return (
    <div className="student-feedbak-section padding-tb shape-img">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <span className="subtitle">{subTitle}</span>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center row-cols-lg-2 row-cols-1">
            <div className="col">
              <div className="sf-left">
                <div className="sfl-thumb">
                  <img
                    src="assets/images/feedback/01.png"
                    alt="student feedback"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              {studentList.map((val, i) => (
                <div className="stu-feed-item" key={i}>
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                        </div>
                        <div className="sftl-content">
                          {/* <a href={val.href} target="_blank"> */}
                          <h6>{val.name}</h6>
                          {/* </a> */}
                          <span>{val.degi}</span>
                        </div>
                      </div>
                      <div className="sft-right">{val.durasion}</div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
