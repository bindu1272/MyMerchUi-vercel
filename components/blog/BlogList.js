import React from "react";
import Blog from "./Blog";

const BlogList = ({
  blogs
}) => {
  return (
    <>
      <div className="grid_items">
        <div className="blog_grid_items">
          {blogs && blogs.length > 0
            ? blogs.map((blog, i) => {
              return <Blog blog={blog} key={i} />;
            })
            : "No blogs available for display"
          }
        </div>
      </div>
    </>
  );
};

export default BlogList;
