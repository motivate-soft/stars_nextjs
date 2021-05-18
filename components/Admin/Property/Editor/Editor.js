import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css";
import EditorWrapper from "./Editor.styles";
import mediaApi from "service/mediaApi";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

function Editor(props) {
  const [theme, setTheme] = useState("snow");
  const { html, onEditorStateChange, placeholder } = props;

  const quillRef = useRef(null);

  function handleChange(html) {
    onEditorStateChange(html);
  }

  function handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    setTheme(newTheme);
  }

  function handleImageUpload(image, callback) {
    var range = quillRef.getEditor().getSelection();
    var value = prompt("What is the image URL");
    console.log("handleImageUpload", image, range);
    if (value) {
      quillRef.getEditor().insertEmbed(range.index, "image", value, "user");
    }

    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      body.append("file", file);

      if (propertyId) {
        body.append("property", propertyId);
      }
      try {
        notification("success", `${file.name} has been uploaded`);

        // Save current cursor state
        const range = quillRef.getSelection(true);

        // Insert temporary loading placeholder image
        quillRef.insertEmbed(
          range.index,
          "image",
          `${window.location.origin}/images/loaders/placeholder.gif`
        );

        // Move cursor to right side of image (easier to continue typing)
        quillRef.setSelection(range.index + 1);

        const res = await mediaApi.add(body);

        // Remove placeholder image
        quillRef.deleteText(range.index, 1);

        // Insert uploaded image
        quillRef.insertEmbed(range.index, "image", res.file);
      } catch (error) {
        notification("warning", `Failed to upload ${file.name} `);
      }
    };
  }

  return (
    <EditorWrapper>
      <ReactQuill
        ref={quillRef}
        theme={theme}
        onChange={handleChange}
        value={html}
        modules={{
          toolbar: {
            ...Editor.modules.toolbar,
            handlers: {
              image: handleImageUpload,
            },
          },
          ...Editor.modules,
        }}
        formats={Editor.formats}
        bounds={".app"}
        placeholder={placeholder}
      />
      {/* <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={(e) => this.handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div> */}
    </EditorWrapper>
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    // [{ header: '1' }, { header: '2' }, { font: [] }],
    // [{ size: [] }],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
};

export default Editor;
