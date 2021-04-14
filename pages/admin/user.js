import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../../containers/Admin/DashboardLayout/DashboardLayout';
import {withAuthSync} from "@redux/authentication/auth.utils";
import {withRouter} from "next/router";
import UserList from "@components/Admin/Users/UserList";
import SingleUser from "@components/Admin/Users/SingleUser";


const getUserId = (props) => {
    try {
        const {router} = props;
        return {
            userId: router.query.id,
            redirectPath: router.pathname,
        };
    } catch (e) {

    }
};

export default withRouter(
    withAuthSync((props) => {
        let {userId, redirectPath} = getUserId(props);

        return (
            <>
                <Head>
                    <title>Users</title>
                </Head>
                <DashboardLayout>
                    {userId ? (
                        <SingleUser userId={userId} redirectPath={redirectPath}/>
                    ) : (
                        <UserList/>
                    )}
                </DashboardLayout>
            </>
        )
    })
)
