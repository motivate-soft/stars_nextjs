import React from "react";
import Popconfirm from "../Feedback/Popconfirm";
import { DeleteOutlined } from "@ant-design/icons";

export default function ({ index, onDeleteCell }) {
  return (
    <Popconfirm
      title="Sure to delete?"
      okText="DELETE"
      cancelText="No"
      onConfirm={() => onDeleteCell(index)}
    >
      <DeleteOutlined />
    </Popconfirm>
  );
}
