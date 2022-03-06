import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Button from "@iso/components/uielements/button";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Loader from "@iso/components/utility/loader";
import CardWrapper from "./BookingList.styles";

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

  console.log(`StatusCell`, key, STATUS_CHOICES[key])

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
      accessor: "start",
      width: 200,
      sortType: "basic",
    },
    {
      Header: "Check out",
      accessor: "end",
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
        </div>
      ),
    },
  ];

  function onDeleteCell(bookingId) {
    dispatch(bookingActions.deleteBooking(bookingId));
  }

  return (
    <LayoutWrapper>
      <PageHeader>Booking</PageHeader>
      <Box>
        <CardWrapper>
          <div className="bookingTableBtn">
            <Link href={`booking?id=new`}>
              <a>
                <Button type="primary" className="addBookingBtn">
                  Add Booking
                </Button>
              </a>
            </Link>
          </div>
          {loading && <Loader />}
          {items && (
            <Scrollbars
              style={{ width: "100%", height: "calc(100vh - 400px)" }}
            >
              <AntReactTable columns={columns} data={items} />
            </Scrollbars>
          )}
        </CardWrapper>
      </Box>
    </LayoutWrapper>
  );
}
