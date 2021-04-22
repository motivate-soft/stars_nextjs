import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Button, Modal } from "antd";
import StickyBooking from "../StickyBooking/StickyBooking";
import BookingWidget from "./BookingWidget";

const BottomReservation = ({ title, price, rating, ratingCount }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <StickyBooking
        logo="/images/logo-alt.svg"
        title={title}
        price={price}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
        action={
          <Button type="primary" onClick={() => setVisible(true)}>
            Book
          </Button>
        }
      />

      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        maskStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        wrapClassName="reservation_modal"
        closable={false}
      >
        <BookingWidget />
        <Button onClick={() => setVisible(false)} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </>
  );
};

export default BottomReservation;
