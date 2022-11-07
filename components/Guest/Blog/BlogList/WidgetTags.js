// react
import React, { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import WidgetTagsWrapper from "./WidgetTags.styles";
import { Button, Select, Input } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";

const { Option } = Select;

function WidgetTags(props) {
  const { tags, tagOptions } = props;
  const [isEditting, setIsEditting] = useState(false);
  // const [tagOptions, setTagOptions] = useState(null);
  const [selected, setSelected] = useState(null);

  // useEffect(() => {
  //   fetchAllTags();
  // }, []);

  // useEffect(() => {
  //   console.log("WidgetTags:tags", tags, onChangeTags);
  // }, []);

  // async function fetchAllTags() {
  //   try {
  //     const array = await tagApi.getAll();
  //     setTagOptions(array);
  //     onChangeTags(array.map((item) => item.id));
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  function showEditForm() {
    setIsEditting(true);
  }

  function hideEditForm() {
    setIsEditting(false);
  }

  function handleAddTag() {
    setSelected(null);
    onChangeTags([...tags, parseInt(selected)]);
  }

  function handleRemoveTag(tagId) {
    const newTags = tags.filter((tag) => tag !== tagId);
    onChangeTags(newTags);
  }

  function renderEditForm() {
    if (!isEditting) return null;
    if (tags.length === tagOptions.length) {
      return null;
    }

    const filteredTagOptions = tagOptions.filter(
      (option) => tags.indexOf(option.id) === -1
    );

    return (
      <div className="tag__search__form">
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Select tag to add"
          value={selected}
          onChange={(value) => {
            setSelected(value);
          }}
        >
          {filteredTagOptions &&
            filteredTagOptions.map((option) => (
              <Option key={option.id}>{option.name}</Option>
            ))}
        </Select>
        <Button type="primary" onClick={handleAddTag}>
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
          <button
            className="widget_tag_edit_btn"
            onClick={isEditting ? hideEditForm : showEditForm}
          >
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
