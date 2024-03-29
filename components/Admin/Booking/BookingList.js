import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Button from "@iso/components/uielements/button";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import { EditOutlined, FieldTimeOutlined, DeleteOutlined } from "@ant-design/icons";
import Loader from "@iso/components/utility/loader";
import { BookingListWrapper } from "./Booking.styles";

import bookingActions from "@redux/bookings/actions";
import { useDispatch, useSelector } from "react-redux";
import AntReactTable from "../Datatable/AntReactTable";
import { Tag } from "antd";

const STATUS_CHOICES = {
  'E': 'enquiry',
  'P': 'pending',
  'A': 'accepted',
  'D': 'declined',
}

const StatusCell = (props) => {
  const key = props.status

  switch (key) {
    case "A":
      return <Tag color="blue">{STATUS_CHOICES[key]}</Tag>
      break;
    case "D":
      return <Tag color="red">{STATUS_CHOICES[key]}</Tag>
      break;
    case "E":
      return <Tag color="orange">{STATUS_CHOICES[key]}</Tag>
      break;
    default:
      return <Tag color="green" >{STATUS_CHOICES[key]}</Tag>
  }
}

export default function BookingList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.Bookings);

  useEffect(() => {
    dispatch(bookingActions.getAllBookings());
  }, []);

  const columns = [
    {
      Header: "Guest",
      accessor: "last_name",
      width: 100,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        <Link href={`/admin/booking?id=${original.id}`}>{original.first_name + " " + original.last_name}</Link>
      ),
    },
    {
      Header: "Email",
      accessor: "email",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Address",
      accessor: "address",
      width: 300,
      sortType: "basic",
      Cell: ({ row: { original } }) => (
        original.country + "," + original.state + "," + original.city
      ),
    },
    {
      Header: "BookervilleID",
      accessor: "property.bookerville_id",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Check in",
      accessor: "checkin_date",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Check out",
      accessor: "checkout_date",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Status",
      accessor: "status",
      width: 100,
      sortType: "basic",
      Cell: ({ row: { original } }) => <StatusCell status={original.status} />
    },
    {
      Header: "Action",
      accessor: "action",
      minWidth: 300,
      Cell: ({ row: { original } }) => (
        <div className="opt-cell">
          <Link href={`/admin/booking?id=${original.id}`}>
            <EditOutlined />
          </Link>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onDeleteCell(original.id)}
          >
            <DeleteOutlined />
          </Popconfirm>
          {
            original.status === "P" &&
            <>
              <Button type="primary" size="small" style={{ marginRight: 12 }} onClick={() => handleApprove(original.id)} >Approve</Button>
              <Button type="danger" size="small" onClick={() => handleDecline(original.id)} >Decline</Button>
            </>
          }
        </div>
      ),
    },
  ];

  function handleApprove(bookingId) {
    dispatch(bookingActions.approveBooking(bookingId));
  }

  function handleDecline(bookingId) {
    dispatch(bookingActions.declineBooking(bookingId));
  }

  function onDeleteCell(bookingId) {
    dispatch(bookingActions.deleteBooking(bookingId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Booking</PageHeader>
      <Box>
        <BookingListWrapper>
          {loading && <Loader />}
          {items && (
            <Scrollbars
              style={{ width: "100%", height: "calc(100vh - 400px)" }}
            >
              <AntReactTable columns={columns} data={items} />
            </Scrollbars>
          )}
        </BookingListWrapper>
      </Box>
    </LayoutWrapper>
  );
}
