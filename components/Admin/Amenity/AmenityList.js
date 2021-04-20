import React, {useEffect} from "react";
import clone from "clone";
import Link from "next/link";
import Box from "@iso/components/utility/box";
import HelperText from "@iso/components/utility/helper-text";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import Scrollbars from "@iso/components/utility/customScrollBar";
import Button from "@iso/components/uielements/button";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import {
    DateCell,
    ImageCell,
    LinkCell,
    TextCell,
} from "@iso/components/Tables/HelperCells";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import Loader from '@iso/components/utility/loader';
import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import CardWrapper from "./AmenityList.styles";

import amenityActions from "@redux/amenities/actions";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

const renderCell = (object, type, key) => {
    const value = object[key] ? object[key] : '';
    switch (type) {
        case "ImageCell":
            return ImageCell(value);
        case "DateCell":
            return DateCell(value);
        case "LinkCell":
            return LinkCell(value);
        default:
            return TextCell(value);
    }
};

const tableColumns = [
    {
        title: "Name",
        key: "name",
        width: 100,
        render: (object) => renderCell(object, "TextCell", "name"),
    },
    {
        title: "Image",
        key: "image",
        width: 200,
        render: (object) => object.image && renderCell(object.image, "ImageCell", "file"),
    },
    {
        title: "Created At",
        key: "created_date",
        width: 200,
        render: (object) => renderCell(object, "DateCell", "created_date"),
    },
    {
        title: "Updated At",
        key: "updated_date",
        width: 200,
        render: (object) => renderCell(object, "DateCell", "updated_date"),
    },
];

export default function AmenityList() {
    const dispatch = useDispatch();
    const {items, loading} = useSelector((state) => state.Amenities);
    const [state, setState] = React.useState({
        columns: createcolumns(clone(tableColumns)),
        dataList: items,
    });
    const router = useRouter()

    useEffect(() => {
        dispatch(amenityActions.getAllAmenities());
    }, []);

    useEffect(() => {
        setState({
            ...state,
            dataList: items,
        });
    }, [items]);

    const {columns, dataList} = state;

    function createcolumns(columns) {
        const optColumn = {
            title: "Action",
            dataIndex: "operation",
            width: 200,
            render: (text, record, index) => (
                <div className="opt-cell">
                    <EditOutlined onClick={() => onEditCell(record.id)}/>
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => onDeleteCell(record.id)}
                    >
                        <DeleteOutlined/>
                    </Popconfirm>
                </div>
            ),
        };
        columns.push(optColumn);
        return columns;
    }

    function onEditCell(index) {
        router.push(`/admin/amenity?id=${index}`)
    }

    function onDeleteCell(amenityId) {
        dispatch(amenityActions.deleteAmenity(amenityId));
    }

    return (
        <LayoutWrapper>
            <PageHeader>Amenity</PageHeader>
            <Box>
                <CardWrapper>
                    <div className="isoAmenityTableBtn">
                        <Link href={`amenity?id=1234`}>
                            <a>
                                <Button type="primary" className="mateAddAmenityBtn">
                                    Add Amenity
                                </Button>
                            </a>
                        </Link>
                    </div>
                    {
                        loading
                            ? <Loader/>
                            : <div className="isoAmenityTable">
                                <Scrollbars
                                    style={{width: "100%", height: "calc(60vh - 70px)"}}>
                                    <TableWrapper
                                        onRow={(record, rowIndex) => {
                                            return {
                                                onClick: (event) => {
                                                    console.log("rowClick", record, rowIndex);
                                                },
                                            };
                                        }}
                                        columns={columns}
                                        dataSource={items}
                                        pagination={{pageSize: 5}}
                                        className="amenityListTable"
                                    />
                                </Scrollbars>
                            </div>
                    }
                </CardWrapper>
            </Box>
        </LayoutWrapper>
    );
}
