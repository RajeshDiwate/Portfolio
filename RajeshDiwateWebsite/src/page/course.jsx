import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";

const courseList = [
  {
    imgUrl: "assets/images/course/01.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Fundamentals of Adobe XD Theory Learn New",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/02.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Certified Graphic Design with Free Project Course",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/02.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Lora Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/03.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Theory Learn New Student And Fundamentals",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/03.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Robot Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/04.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Computer Fundamentals Basic Startup Ultricies Vitae",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/04.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Zinat Zaara",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/05.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/05.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Rajib Raj",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/06.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Student Want to Learn About Science And Arts",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/06.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Angel Mili",
    btnText: "Read More",
  },
];

const CoursePage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Portfolio"} curPage={"Portfolio"} />
      {/* <GroupSelect /> */}
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="container port-gallery-section">
              <div className="row">
                <div className="col-12 service-text">
                  <h4>Recent Projects</h4>
                  <h5>Look At Latest Works Gallery</h5>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery1.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery2.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery3.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery4.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery5.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/website5.png"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/website8.png"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/website3.png"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/website7.png"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery6.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery7.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/portfolio/gallery8.jpg"
                    alt="image"
                  />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <img
                    className="img-fluid port-gallery-img"
                    src="assets/images/course/website5.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CoursePage;
