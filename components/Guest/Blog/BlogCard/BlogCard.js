import React from "react";
import Button from "@iso/components/uielements/button";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { BlogCardWrapper } from "./BlogCard.styles";
import moment from "moment";

function BlogCard(props) {
  const { post, layout } = props;
  const cardClasses = classNames("blog-card", {
    "blog-card--layout--grid": ["grid-nl", "grid-lg"].includes(layout),
    "blog-card--layout--list": ["list-nl", "list-sm"].includes(layout),
    "blog-card--size--nl": ["grid-nl", "list-nl"].includes(layout),
    "blog-card--size--lg": layout === "grid-lg",
    "blog-card--size--sm": layout === "list-sm",
  });

  // const tags = post.tags.map((tag, index) => (
  //   <Link key={index} href="/">
  //     {tag}
  //   </Link>
  // ));

  return (
    <BlogCardWrapper>
      <div className={cardClasses}>
        <div className="blog-card__image">
          <Link href={`/blog/${post.slug}`}>
            <img src={post.image} alt="" />
          </Link>
        </div>
        <div className="blog-card__info">
          {/* <div className="blog-card__category">{tags}</div> */}
          <div className="blog-card__name">
            <Link href="/blog/blog-classic">{post.title}</Link>
          </div>
          <div className="blog-card__date">
            {moment(post.published_date).format("MMM DD YYYY")}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="blog-card__read-more">
            <Link
              href={`/blog/${post.slug}`}
              className="btn btn-secondary btn-sm"
            >
              <Button type="secondary" size="large">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BlogCardWrapper>
  );
}

BlogCard.propTypes = {
  /**
   * post data object
   */
  post: PropTypes.object,
  /**
   * post card layout
   * one of ['grid-nl', 'grid-lg', 'list-nl', 'list-sm']
   */
  layout: PropTypes.oneOf(["grid-nl", "grid-lg", "list-nl", "list-sm"]),
};

export default BlogCard;
