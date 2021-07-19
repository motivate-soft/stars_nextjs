import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import moment from "moment";
import Link from "next/link";
import defaultFeatured from "@assets/images/post-featured.jpg";

export default function BlogPost(props) {
  const { layout, blog } = props;

  const blogClasses = classNames("blog__content typography", {
    "typography--expanded": layout === "full",
  });

  return (
    <div className={`block blog blog--layout--${layout}`}>
      <div
        className={`blog__header blog-header blog-header--layout--${layout}`}
      >
        <h1 className="blog-header__title">{blog.title}</h1>
        <div className="blog-header__meta">
          <div className="blog-header__meta-item">
            By <Link href="/">{blog.author_full_name}</Link>
          </div>
          <div className="blog-header__meta-item">
            <Link href="/">
              {moment(blog.published_date).format("MMM DD YYYY")}
            </Link>
          </div>
        </div>
      </div>

      <div className="blog__featured">
        <Link href="/">
          <img
            src={blog.image ? blog.image : defaultFeatured}
            alt="blog cover"
          />
        </Link>
      </div>

      <div className={blogClasses}>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      <div className="blog__footer">
        <div className="blog__tags-share-links">
          <div className="blog__tags tags">
            <div className="tags__list">
              {blog.tags.map((tag, index) => (
                <Link href="">{tag}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="blog__section">
        {/* <h4 className="blog__section-title">Related Posts</h4>
                <div className="related-blogs">
                    <div className="related-blogs__list">
                        {relatedPostsList}
                    </div>
                </div> */}
      </section>
    </div>
  );
}

BlogPost.propTypes = {
  layout: PropTypes.oneOf(["classic", "full"]),
};

BlogPost.defaultProps = {
  layout: "classic",
};
