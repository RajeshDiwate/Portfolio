import { Link } from "react-router-dom";

const subTitle = "Web Development Skills";
const title = "My Technica Skills";

const btnText = "Browse All Categories";

const categoryList = [
  {
    imgUrl: "assets/images/category/icon/htmlNew.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Science",
    count: "HTML",
  },
  {
    imgUrl: "assets/images/category/icon/css.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Civil Engineering",
    count: "CSS",
  },
  {
    imgUrl: "assets/images/category/icon/react1.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Business Analysis",
    count: "REACTJS",
  },
  {
    imgUrl: "assets/images/category/icon/js.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Data Science Analytics",
    count: "JAVASCRIPT",
  },
  {
    imgUrl: "assets/images/category/icon/node-js.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Learning Management",
    count: "NODEJS",
  },
  {
    imgUrl: "assets/images/category/icon/next.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "NEXTJS",
  },
  {
    imgUrl: "assets/images/category/icon/mysql.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "MYSQL",
  },
  {
    imgUrl: "assets/images/category/icon/typescript.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "TYPESCRIPT",
  },
  {
    imgUrl: "assets/images/category/icon/mui.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "MUI",
  },
  {
    imgUrl: "assets/images/category/icon/shadcn.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "Shadcn",
  },
  {
    imgUrl: "assets/images/category/icon/tailwind.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "Tailwind",
  },
  {
    imgUrl: "assets/images/category/icon/mogodbnew.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "MONGODB",
  },
  {
    imgUrl: "assets/images/category/icon/postgre.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "POSTGRESQL",
  },
  {
    imgUrl: "assets/images/category/icon/bootsrapnew.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "BOOTSTRAP",
  },
  {
    imgUrl: "assets/images/category/icon/express.png",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Engineering",
    count: "EXPRESS",
  },
];

const Category = () => {
  return (
    <div className="category-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <span className="subtitle">{subTitle}</span>
        </div>
        <div className="section-wrapper">
          <div className="row g-2 justify-content-center row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-2">
            {categoryList.map((val, i) => (
              <div className="col" key={i}>
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                    </div>
                    <div className="category-content">
                      <Link to="/course">{/* <h6>{val.title}</h6> */}</Link>
                      <span>{val.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-5">
            <Link to="/course" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
