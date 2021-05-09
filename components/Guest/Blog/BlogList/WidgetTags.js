// react
import React from "react";
import Link from "next/link";
import WidgetTagsWrapper from "./WidgetTags.styles";

function WidgetTags({ tags }) {
  return (
    <WidgetTagsWrapper>
      <div className="widget-tags widget">
        <h4 className="widget__title">Tags Cloud</h4>
        <div className="tags tags--lg">
          <div className="tags__list">
            {tags &&
              tags.length > 0 &&
              tags.map((tag, index) => <Link href="/">{tag.name}</Link>)}
          </div>
        </div>
      </div>
    </WidgetTagsWrapper>
  );
}

export default WidgetTags;
