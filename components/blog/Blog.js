import Image from "next/image";
import React from "react";

const Blog = ({
    blog
}) => {
    return (
        <div className="blog-item-info">
            <Image alt=""
                //src={`${process.env.REACT_APP_STRAPI_API_URL}${blog.image330x330 && blog.image330x330.url}`}
                src={`${blog.image330x330 && blog.image330x330.url}`}
                width='500'
                height='328'
            />
            <div className="overly-info">
                <label>{blog.createDate}</label>
                <h1>{blog.title}</h1>
                <div className="hide-info">
                    <h3>{blog.description}</h3>
                    <a
                        className="btn_white"
                        href={`/blogDetails/${blog.slug}`}
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
