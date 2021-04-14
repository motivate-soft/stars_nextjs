import React, { useState, useEffect } from "react";
import { Form, Row, Col, Switch } from "antd";
import { BACKEND_URL } from "env-config";
import { getCookie } from "@redux/authentication/auth.utils";
import Button from "@iso/components/uielements/button";
import Room from "./Room";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const requiredRule = {
  required: true,
  message: "Please fill this field",
};

export default function Rooms(props) {
  const { rooms, onRoomChange, onAddRoom, onRemoveRoom } = props;

  return (
    <div style={{ margin: "0 20px", background: "#fff", padding: 20 }}>
      <Button type="primary" onClick={onAddRoom}>
        Add new room
      </Button>
      {rooms &&
        rooms.length > 0 &&
        rooms
          .filter((room) => room.bedType !== "")
          .map((room, index) => (
            <Room
              key={index}
              room={room}
              onRoomChange={onRoomChange}
              onRemoveRoom={onRemoveRoom}
            />
          ))}
    </div>
  );
}
