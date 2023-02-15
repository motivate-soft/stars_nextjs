import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import ModalEvents from "./ModalEvents";
import notification from "@iso/components/Notification";
import propertyActions from "@redux/properties/actions";

import { CalendarStyleWrapper } from "./Calendar.styles";

const Localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

export default function PricingCalendar(props) {
  const { propertyId, defaultPrice } = props;

  const [pricingItems, setPricingItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const dispatch = useDispatch();
  const { selectedItem } = useSelector((state) => state.Properties);

  useEffect(() => {
    getPricingData(propertyId);
  }, []);

  useEffect(() => {
    if (selectedItem.pricing_items) {
      const newItems = selectedItem.pricing_items.map((item, index) => ({
        price: item.price,
        allDay: true,
        start: item.start_date,
        end: item.end_date,
      }));
      setPricingItems(newItems);
    }
  }, [selectedItem]);

  async function getPricingData() {
    dispatch(propertyActions.getPriceItems(propertyId));
  }

  const handleSlotSelection = ({ start, end, action }) => {
    setModalVisible(true);
    setModalData({
      price: defaultPrice,
      start: convertDate(start),
      end: convertDate(end),
    });
  };

  const convertDate = (date) => {
    const offset = date.getTimezoneOffset();
    const newDate = new Date(date.getTime() - offset * 60 * 1000);
    return newDate.toISOString().split("T")[0];
  };

  const handleChangeModalData = (type, modalData) => {
    if (type === "cancel") {
      setModalVisible(false);
      setModalData(null);
    } else if (type === "delete") {
      // some logic to delete pricing item
    } else if (type === "updateValue") {
      setModalData({
        price: modalData.price,
        start: modalData.start,
        end: modalData.end,
      });
    } else {
      dispatch(
        propertyActions.createPriceItem(
          {
            start_date: modalData.start,
            end_date: modalData.end,
            price: modalData.price,
            property: propertyId,
          },
          dispatch
        )
      );
      setModalVisible(false);
    }
  };

  return (
    <CalendarStyleWrapper className="isomorphicCalendarWrapper">
      <ModalEvents
        modalVisible={modalVisible}
        modalData={modalData}
        onModalDataChange={handleChangeModalData}
      />
      <Calendar
        // className="isomorphicCalendar"
        // selectable
        // localizer={Localizer}
        // onView={onView}
        // defaultView="month"
        // step={60}
        selectable
        resizable
        events={pricingItems}
        views={["month"]}
        defaultDate={new Date()}
        defaultView="month"
        toolbar={true}
        localizer={Localizer}
        step={30}
        components={{
          month: {
            dateHeader: ({ date, label }) => {
              let pricingItem = pricingItems.find((item) =>
                moment(date).isBetween(
                  moment(item.start),
                  moment(item.end),
                  null,
                  "[]"
                )
              );
              return (
                <div className="calendar-date-cell">
                  <h4>{moment(date).date()}</h4>
                  <h6>
                    ${" "}
                    {pricingItem !== undefined
                      ? pricingItem.price
                      : defaultPrice}
                  </h6>
                </div>
              );
            },
          },
        }}
        onSelectSlot={handleSlotSelection}
      />
    </CalendarStyleWrapper>
  );
}
