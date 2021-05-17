import React from "react";
import moment from "moment";
import Input from "@iso/components/uielements/input";
import { DateRangepicker } from "@iso/components/uielements/datePicker";
import Modal from "@iso/components/Feedback/Modal";
import { CalendarModalBody } from "./Calendar.styles";

import DeleteButton from "./DeleteButton";
const RangePicker = DateRangepicker;
const dateFormat = "YYYY-MM-DD";
const localeDatePicker = {
  lang: {
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"],
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "Ok",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "Select time",
    dateSelect: "Select date",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "YYYY-MM-DD",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century",
  }
};
export default function (props) {
  const { modalVisible, modalData, onModalDataChange } = props;
  const handleOk = () => {
    onModalDataChange("ok", modalData);
  };
  const handleCancel = () => {
    onModalDataChange("cancel");
  };

  const handleDelete = () => {
    onModalDataChange("delete", modalData);
  };

  const visible = !!modalVisible;
  if (!visible) return null;

  const price = modalData && modalData.price ? modalData.price : "";
  const start =
    modalData && modalData.start ? moment(modalData.start, dateFormat) : "";
  const end =
    modalData && modalData.end ? moment(modalData.end, dateFormat) : "";

  console.log("__modalData__", modalData);

  const onChangePrice = (event) => {
    console.log("onChangePrice", event);
    modalData.price = event.target.value;
    onModalDataChange("updateValue", modalData);
  };

  const onChangeFromTimePicker = (value) => {
    try {
      modalData.start = value[0].toDate();
      modalData.end = value[1].toDate();
    } catch (e) {}
    onModalDataChange("updateValue", modalData);
  };

  return (
    <div>
      <Modal
        title={"Set pricing"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <CalendarModalBody>
          <div className="isoCalendarInputWrapper">
            <Input
              value={price}
              placeholder="price for this period"
              onChange={onChangePrice}
            />
          </div>
          <div className="isoCalendarDatePicker">
            <RangePicker
              // locale={localeDatePicker}
              ranges={{
                Today: [moment(), moment()],
                "This Month": [moment(), moment().endOf("month")],
              }}
              value={[start, end]}
              format={dateFormat}
              onChange={onChangeFromTimePicker}
            />
            {/* <RangePicker
              value={[start, end]}
              format={dateFormat}
              locale={localeDatePicker}
            /> */}
            <DeleteButton handleDelete={handleDelete} />
          </div>
        </CalendarModalBody>
      </Modal>
    </div>
  );
}
