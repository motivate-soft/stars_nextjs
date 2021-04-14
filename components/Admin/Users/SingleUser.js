import React from "react";
import EditUser from "@components/Admin/Users/EditUser";
import AddUser from "@components/Admin/Users/AddUser";

export default function SingleUser(props) {
    const {userId} = props;
    if (userId !== "1234") {
        return <EditUser userId={userId}/>;
    }
    return <AddUser/>;
}
