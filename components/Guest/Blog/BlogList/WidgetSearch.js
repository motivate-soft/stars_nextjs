import React from "react";
import { Input } from "antd";
import { FaSearch } from "react-icons/fa";
import WidgetSearchWrapper from "./WidgetSearch.styles";

function WidgetSearch(props) {
  const { search, onChangeSearch } = props;
  return (
    <WidgetSearchWrapper>
      <div className="widget-search">
        <form className="widget-search__body">
          <Input
            size="large"
            type="text"
            value={search}
            className="widget-search__input"
            placeholder="Blog search..."
            onChange={onChange}
          />
          <button className="widget-search__button" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </WidgetSearchWrapper>
  );
}

export default WidgetSearch;
