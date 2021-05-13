// react
import React, { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import WidgetTagsWrapper from "./WidgetTags.styles";
import tagApi from "service/tagApi";
import { Button, Select, Input } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";

function WidgetTags(props) {
  const { tags, onChangeTags } = props;
  const [isEditting, setIsEditting] = useState(false);
  const [tagOptions, setTagOptions] = useState(null);

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    console.log("WidgetTags:tags", tags, onChangeTags);
  });

  async function fetchTags() {
    try {
      const array = await tagApi.getAll();
      console.log("WidgetTags:fetchTags", array);
      setTagOptions(array);
      onChangeTags(array.map((item) => item.id));
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
    const newTags = tags.filter((tag) => tag !== tagId);
    onChangeTags(newTags);
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
    if (tags === null) {
      return (
        <div className="tags__list">
          {tagOptions &&
            tagOptions.map((option) => (
              <div key={option.id} className="tag">
                <Link
                  className="tag__link"
                  href={`/blog/tagged/${option.slug}`}
                >
                  <span>{option.name}</span>
                </Link>

                {isEditting && (
                  <span
                    className="delete-tag"
                    onClick={() => handleRemoveTag(option.id)}
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
      <div className="tags__list">
        {tagOptions &&
          tagOptions
            .filter((option) => tags.indexOf(option.id) > -1)
            .map((option) => (
              <div key={option.id} className="tag">
                <Link
                  className="tag__link"
                  href={`/blog/tagged/${option.slug}`}
                >
                  <span>{option.name}</span>
                </Link>

                {isEditting && (
                  <span
                    className="delete-tag"
                    onClick={() => handleRemoveTag(option.id)}
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
          <h4>Tags</h4>
          <button className="widget_tag_edit_btn" onClick={showEditForm}>
            <span>{isEditting ? "Close" : "Edit"}</span>
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
