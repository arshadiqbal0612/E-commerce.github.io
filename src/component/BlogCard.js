import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card ">
          <div className="card-image ">
            <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
          </div>

          <div className="blog-content">
            <p className="date">1 Dec,2022</p>
            <h5 className="title"> A beautiful sunday morning </h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              temporibus repellendus rem harum nulla ad distinctio dolor aperiam
              beatae doloribus.
            </p>

            <Link to="/blog/:id" className="Button">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
