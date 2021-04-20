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
import CardWrapper from "./Post.styles";

import postActions from "@redux/posts/actions";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

const renderCell = (object, type, key) => {
    const value = object[key] ? object[key] : "";
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
        title: "Title",
        key: "title",
        width: 100,
        render: (object) => renderCell(object, "TextCell", "title"),
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

export default function PostList() {
    const dispatch = useDispatch();
    const {items, loading} = useSelector((state) => state.Posts);
    const [state, setState] = React.useState({
        columns: createcolumns(clone(tableColumns)),
        dataList: items,
    });

    const router = useRouter();

    useEffect(() => {
        dispatch(postActions.getAllPosts());
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

    function onEditCell(id) {
        router.push(`/admin/post?id=${id}`);
    }

    function onDeleteCell(postId) {
        dispatch(postActions.deletePost(postId));
    }

    return (
        <LayoutWrapper>
            <PageHeader>Post</PageHeader>
            <Box>
                <CardWrapper>
                    <div className="isoPostTableBtn">
                        <Link href={`post?id=1234`}>
                            <a>
                                <Button type="primary" className="mateAddPostBtn">
                                    Add Post
                                </Button>
                            </a>
                        </Link>
                    </div>
                    {loading
                        ? <Loader/>
                        : (
                            <div className="isoPostTable">
                                <Scrollbars
                                    style={{width: "100%", height: "calc(60vh - 70px)"}}
                                >
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
                                        // pagination={{ pageSize: 5 }}
                                        className="postListTable"
                                    />
                                </Scrollbars>
                            </div>
                        )}
                </CardWrapper>
            </Box>
        </LayoutWrapper>
    );
}
