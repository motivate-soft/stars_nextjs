import React from 'react'
import Head from "next/head";
import DashboardLayout from "@containers/Admin/DashboardLayout/DashboardLayout";
import EditProfile from "@components/Admin/Profile/EditProfile";

function Profile() {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <DashboardLayout>
                <EditProfile/>
            </DashboardLayout>
        </>
    )
}

export default Profile;