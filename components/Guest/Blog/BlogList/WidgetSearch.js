import React from "react";
import { FaSearch } from "react-icons/fa";
import WidgetSearchWrapper from "./WidgetSearch.styles";

function WidgetSearch() {
  return (
    <WidgetSearchWrapper>
      <div className="widget-search">
        <form className="widget-search__body">
          <input
            className="widget-search__input"
            placeholder="Blog search..."
            type="text"
            autoComplete="off"
            spellCheck="false"
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
