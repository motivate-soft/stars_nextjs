import React, {useEffect} from "react";
import clone from "clone";
import {UserListWrapper} from "./UserList.style";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import Popconfirm from "@iso/components/Feedback/Popconfirm";
import Tag from "@iso/components/uielements/tag";
import {
    DateCell,
    ImageCell,
    LinkCell,
    TextCell,
} from "@iso/components/Tables/HelperCells";
import {useDispatch, useSelector} from "react-redux";
import userActions from "@redux/users/actions";
import {useRouter} from "next/router";
import PageHeader from "@iso/components/utility/pageHeader";
import Box from "@iso/components/utility/box";
import HelperText from "@iso/components/utility/helper-text";
import Scrollbars from "@iso/components/utility/customScrollBar";
import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import Loader from '@iso/components/utility/loader';

const renderCell = (object, type, key) => {
    const value = object[key];
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

const userTableColumns = [
    {
        title: "First Name",
        key: "first_name",
        width: 100,
        render: (object) => renderCell(object, "TextCell", "first_name"),
    },
    {
        title: "Last Name",
        key: "last_name",
        width: 100,
        render: (object) => renderCell(object, "TextCell", "last_name"),
    },
    {
        title: "Username",
        key: "username",
        width: 200,
        render: (object) => renderCell(object, "TextCell", "username"),
    },
    {
        title: "Role",
        key: "role",
        width: 200,
        render: (object) => {
            switch (object.role) {
                case "S":
                    return <p key="1">Super Admin</p>;
                case "A":
                    return <p key="2">Admin</p>;
                default:
                    return <p key="3">Editor</p>;
            }
        },
    },
    {
        title: "Status",
        key: "status",
        width: 200,
        render: (object) => {
            switch (object.status) {
                case "P":
                    return <Tag color="orange">Pending</Tag>;
                case "A":
                    return <Tag color="green">Approved</Tag>;
                case "B":
                    return <Tag color="red">Blocked</Tag>;
                default:
                    return <Tag color="green">Approved</Tag>;
            }
        },
    },
];

export default function UserList() {
    const {items, loading} = useSelector(state => state.Users);
    const [state, setState] = React.useState({
        columns: createcolumns(clone(userTableColumns)),
        dataList: items,
    });
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.getAllUsers())
    }, []);

    const {columns, dataList} = state;

    function createcolumns(columns) {
        const optColumn = {
            title: "operation",
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
        router.push(`/admin/user?id=${index}`)
    }

    function onDeleteCell(userId) {
        dispatch(userActions.deleteUser(userId))
    }

    return (
        <LayoutWrapper>
            <PageHeader>User</PageHeader>
            <Box>
                <UserListWrapper>
                    {/*<div className="isoUserTableBtn">*/}
                    {/*    <Link href={`user?id=1234`}>*/}
                    {/*        <a>*/}
                    {/*            <Button type="primary" className="mateAddUserBtn">*/}
                    {/*                Add User*/}
                    {/*            </Button>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {
                        loading
                            ? <Loader/>
                            : <div className="isoUserTable">
                                <Scrollbars
                                    style={{width: "100%", height: "calc(60vh - 70px)"}}
                                >
                                    <TableWrapper
                                        columns={columns}
                                        dataSource={items}
                                        pagination={{pageSize: 5}}
                                        className="userListTable"
                                    />
                                </Scrollbars>
                            </div>
                    }
                </UserListWrapper>
            </Box>
        </LayoutWrapper>
    );
}
