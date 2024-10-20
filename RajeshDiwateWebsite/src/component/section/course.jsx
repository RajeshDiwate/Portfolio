import { Link } from "react-router-dom";

const subTitle = "Delivering Exceptional Web Experiences";
const title = "My Portfolio";

const btnText = "See All Projects";

const courseList = [
  {
    imgUrl: "assets/images/course/website1.png",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Php Project",
    reviewCount: "03 reviews",
    title: "Honer Homes",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "See Live",
  },
  {
    imgUrl: "assets/images/course/website3.png",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Reactjs Project",
    reviewCount: "03 reviews",
    title: "Grank Digital Marketing Company",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/02.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Lora Smith",
    btnText: "See Live",
  },
  {
    imgUrl: "assets/images/course/website7.png",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Brand Marketing",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/03.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Robot Smith",
    btnText: "See Live",
  },
  {
    imgUrl: "assets/images/course/website8.png",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Rajapushpa Provincia",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/04.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Zinat Zaara",
    btnText: "See Live",
  },
  {
    imgUrl: "assets/images/course/website8.png",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Rajapushpa Provincia",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/04.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Zinat Zaara",
    btnText: "See Live",
  },
  {
    imgUrl: "assets/images/course/gallery6.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "hyori",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/05.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Rajib Raj",
    btnText: "See Live",
  },
  {
    imgUrl: "assets/images/course/gallery7.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Tolips",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/06.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Angel Mili",
    btnText: "See Live",
  },
];

const Course = () => {
  return (
    <div className="course-section padding-tb section-bg ">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title" style={{ color: "#efefef" }}>
            {title}
          </h2>
          <span className="subtitle">{subTitle}</span>
        </div>
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-6 portfolio-section">
            <div className="website-div">
              <img
                className=""
                src="assets/images/course/zoomweb.jpeg"
                alt="imgae"
              />
            </div>
            <div className="website-div-div">
              <img
                style={{ height: "300px", width: "160px" }}
                src="assets/images/course/zoommobile.jpeg"
                alt="image"
              />
            </div>
            <div className="website-button">
              <a
                href="https://zoom-project-rajeshdiwate-projects.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-project-rajeshdiwate-projects.vercel.app%2F/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 portfolio-section">
            <div className="website-div">
              <img
                className=""
                src="assets/images/course/tripweb.png"
                alt="image"
              />
            </div>
            <div className="website-div-div">
              <img
                style={{ height: "300px", width: "160px" }}
                src="assets/images/course/tripmobile.jpeg"
                alt="image"
              />
            </div>
            <div className="website-button">
              <a href="https://www.triprowers.com/" target="_blank">
                Live
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 portfolio-section">
            <div className="website-div">
              <img
                className=""
                src="assets/images/course/website7.png"
                alt="image"
              />
            </div>
            <div className="website-div-div">
              <img
                className=""
                src="assets/images/course/website6.png"
                alt="image"
              />
            </div>
            <div className="website-button">
              <a href="https://brandmarkety.com/" target="_blank">
                Live
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 portfolio-section">
            <div className="website-div">
              <img
                className=""
                src="assets/images/course/website8.png"
                alt="image"
              />
            </div>
            <div className="website-div-div">
              <img
                className=""
                src="assets/images/course/website9.png"
                alt="image"
              />
            </div>
            <div className="website-button">
              <a
                href="https://rajapushpa.in/projects/residential/provincia.php"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-5">
          <Link to="/portfolio" className="lab-btn">
            <span>{btnText}</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Course;
