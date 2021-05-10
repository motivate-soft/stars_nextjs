// react
import React, { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import WidgetTagsWrapper from "./WidgetTags.styles";
import tagApi from "service/tagApi";
import { Button, Select, Input } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";

function WidgetTags() {
  const [isEditting, setIsEditting] = useState(false);
  const [tags, setTags] = useState(null);
  let tagList;

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    try {
      const res = await tagApi.getAll();
      tagList = res;
      setTags(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  function showEditForm() {
    setIsEditting(true);
  }

  function hideEditForm() {
    setIsEditting(false);
  }

  function handleRemoveTag(tagId) {
    const newTags = tags.filter((tag) => tag.id !== tagId);
    setTags(newTags);
  }

  function renderEditForm() {
    if (!isEditting) return null;
    return (
      <div className="tag__search__form">
        <Input type="text" />
        <Button type="primary" onClick={hideEditForm}>
          Add
        </Button>
      </div>
    );
  }

  function renderTagLists() {
    console.log("renderTagLists", tags);
    return (
      <div className="tags__list">
        {tags &&
          tags.map((tag) => (
            <div key={tag.id} className="tag">
              <Link className="tag__link" href={`/blog/tagged/${tag.slug}`}>
                <span>{tag.name}</span>
              </Link>
              {isEditting && (
                <span
                  className="delete-tag"
                  onClick={() => handleRemoveTag(tag.id)}
                >
                  <IoIosCloseCircleOutline />
                </span>
              )}
            </div>
          ))}
      </div>
    );
  }

  return (
    <WidgetTagsWrapper>
      <div className="widget-tags widget">
        <div className="widget__title">
          <h4>Tags Cloud</h4>
          <button className="widget_tag_edit_btn" onClick={showEditForm}>
            <span>{isEditting ? "close" : "edit"}</span>
          </button>
        </div>
        <div className="tags tags--lg">
          {renderTagLists()}
          {renderEditForm()}
        </div>
      </div>
    </WidgetTagsWrapper>
  );
}

export default WidgetTags;
