import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Button, Modal } from "antd";
import StickyBooking from "../StickyBooking/StickyBooking";
import Reservation from "./Reservation";

const BottomReservation = ({ property }) => {
  const { name, price, min_month_price } = property;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <StickyBooking
        title={name}
        price={price}
        minMonthPrice={min_month_price}
        onClickBook={() => setVisible(true)}
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
        <Reservation property={property} />
        <Button onClick={() => setVisible(false)} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </>
  );
};

export default BottomReservation;
